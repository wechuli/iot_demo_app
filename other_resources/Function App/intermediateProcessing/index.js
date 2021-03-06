"use strict";

const axios = require("axios");
const iotHubTransport = require("azure-iot-device-mqtt").Mqtt;
const Client = require("azure-iot-device").Client;
const Message = require("azure-iot-device").Message;
const ProvisioningTransport = require("azure-iot-provisioning-device-mqtt")
  .Mqtt;
const SymmetricKeySecurityClient = require("azure-iot-security-symmetric-key")
  .SymmetricKeySecurityClient;
const ProvisioningDeviceClient = require("azure-iot-provisioning-device")
  .ProvisioningDeviceClient;

const provisioningHost = "global.azure-devices-provisioning.net";
const idScope = "{Scope ID}";
const registrationId = "{Device ID}";
const symmetricKey = "{Primary Key}";
const provisioningSecurityClient = new SymmetricKeySecurityClient(
  registrationId,
  symmetricKey
);
const provisioningClient = ProvisioningDeviceClient.create(
  provisioningHost,
  idScope,
  new ProvisioningTransport(),
  provisioningSecurityClient
);
let hubClient;

module.exports = async function(context, IoTHubMessages) {
  context.log(
    `JavaScript eventhub trigger function called for message array: ${IoTHubMessages}`
  );

  context.log(JSON.stringify(IoTHubMessages));

  // Received parameters
  let message = IoTHubMessages[0];
  let temperature = message.temperature;
  let humidity = message.humidity;
  let deviceId = message.deviceId;

  //calculated parameters
  let tempStatus;
  let chanceOfRain;
  let tempInFahrenheit;

  // calculate whether status of temprature is high or low

  function returnTempStatus(temp) {
    if (temp > 26) {
      return "High";
    }
    return "Low";
  }
  tempStatus = returnTempStatus(temperature);

  //calculate the chance of rain
  function calculateChanceOfRain(temp, humidity) {
    if (temp > 26 && humidity > 75) {
      return parseFloat((50 + Math.random() * 49).toFixed(2));
    }
    return parseFloat((0 + Math.random() * 49).toFixed(2));
  }
  chanceOfRain = calculateChanceOfRain(temperature, humidity);

  //calculate temprature in Fanhrenheit
  function calculateTempInFahr(temp) {
    return parseFloat((temp * (9 / 5) + 32).toFixed(2));
  }
  tempInFahrenheit = calculateTempInFahr(temperature);

  let output = {
    deviceId,
    temperature,
    humidity,
    tempStatus,
    chanceOfRain,
    tempInFahrenheit,
    timeStamp: new Date()
  };

  // Code to send data to IoT central

  // Send device measurements.
  function sendTelemetry() {
    const data = JSON.stringify({
      temperature: tempInFahrenheit,
      humidity,
      tempStatus,
      chanceOfRain
    });
    var message = new Message(data);
    hubClient.sendEvent(message, (err, res) =>
      console.log(
        `Sent message: ${message.getData()}` +
          (err ? `; error: ${err.toString()}` : "") +
          (res ? `; status: ${res.constructor.name}` : "")
      )
    );
  }

  // Handle device connection to Azure IoT Central.
  const connectCallback = err => {
    if (err) {
      console.log(
        `Device could not connect to Azure IoT Central: ${err.toString()}`
      );
    } else {
      console.log("Device successfully connected to Azure IoT Central");

      // Send telemetry measurements to Azure IoT Central every 1 second.
      // setInterval(sendTelemetry, 1000);
      sendTelemetry();
    }
  };

  // Store data in CosmosDB
  context.bindings.outputDocument = output;

  //Store data in Azure Storage
  context.bindings.outputBlob = output;

  // Start the device (connect it to Azure IoT Central).
  provisioningClient.register((err, result) => {
    if (err) {
      console.log("error registering device: " + err);
    } else {
      console.log("registration succeeded");
      console.log("assigned hub=" + result.assignedHub);
      console.log("deviceId=" + result.deviceId);
      var connectionString =
        "HostName=" +
        result.assignedHub +
        ";DeviceId=" +
        result.deviceId +
        ";SharedAccessKey=" +
        symmetricKey;
      hubClient = Client.fromConnectionString(
        connectionString,
        iotHubTransport
      );

      hubClient.open(connectCallback);
    }
  });

  axios
    .post("{your power bi push url}", output)
    .then(result => {
      context.log(result.data);
      context.done();
    })
    .catch(error => {
      context.log("power bi is unreachable");
      context.done();
    });
};
