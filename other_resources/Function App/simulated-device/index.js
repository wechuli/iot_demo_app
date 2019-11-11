"use strict";

var Mqtt = require("azure-iot-device-mqtt").Mqtt;
var DeviceClient = require("azure-iot-device").Client;
var Message = require("azure-iot-device").Message;

module.exports = async function(context, myTimer) {
  var timeStamp = new Date().toISOString();
  // Copyright (c) Microsoft. All rights reserved.
  // Licensed under the MIT license. See LICENSE file in the project root for full license information.

  // The device connection string to authenticate the device with your IoT hub.
  //
  // NOTE:
  // For simplicity, this sample sets the connection string in code.
  // In a production environment, the recommended approach is to use
  // an environment variable to make it available to your application
  // or use an HSM or an x509 certificate.
  // https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security
  //
  // Using the Azure CLI:
  // az iot hub device-identity show-connection-string --hub-name {YourIoTHubName} --device-id MyNodeDevice --output table
  var connectionString = "{input your connection string here}";

  // Using the Node.js Device SDK for IoT Hub:
  //   https://github.com/Azure/azure-iot-sdk-node
  // The sample connects to a device-specific MQTT endpoint on your IoT Hub.

  var client = DeviceClient.fromConnectionString(connectionString, Mqtt);
  let deviceId = "temp_humidity_sensor";

  // Create a message and send it to the IoT hub every second
  function sendMessage() {
    // Simulate telemetry.
    var temperature = 20 + Math.random() * 15;
    var message = new Message(
      JSON.stringify({
        temperature: parseFloat(temperature.toFixed(2)),
        humidity: parseFloat((60 + Math.random() * 30).toFixed(2)),
        deviceId
      })
    );

    // Add a custom application property to the message.
    // An IoT hub can filter on these properties without access to the message body.
    message.properties.add(
      "temperatureAlert",
      temperature > 30 ? "true" : "false"
    );

    console.log("Sending message: " + message.getData());

    // Send the message.
    client.sendEvent(message, function(err) {
      if (err) {
        console.error("send error: " + err.toString());
      } else {
        console.log("message sent");
      }
    });
  }

  sendMessage();
};
