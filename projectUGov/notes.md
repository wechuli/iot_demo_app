# Project

The project involves the typical IoT application scenario, devices collect data, data is sent to an endpoint, data is cleaned and stored and finally visualized in a dashboard endpoint.

## Emphasis

- Use of Azure Event Hubs to decouple data processing
- Exploring Azure Stream
- Use of IoT Hub Routes as the default routing architecture
- Use of message enrichment on routes to stamp additional properties to the message
- Getting additional properties(metadata) about the telemetry and storing to the db

## Architecture

For this project, we will explore two different approaches of achieving the same result:- both have their own pros and cons, which will be explored.

### Approach 1

This is perhaps the simplest and works for most situations. Below is an architecture guideline to

![](assets/arch1.PNG)

- Messages are received at the IoT Hub
- They are enriched with additional properties such as the deviceID, and twin tags before being forwarded to and Event Hub (can be the built in event hub compatible endpoint)
- A function runs every time a message arrives at the event Hub, this function formats the data appropriately, stores it both to Cosmos DB and an SQL Database before forwarding to PowerBI for realtime visualizations of the timeseries data
- Historical analysis will also be performed on the data stored on the SQL Database PowerBI

#### Pros

- Simple and inexpensive since less components are used

### Approach 2

The second approach is to decouple some of the logic done by the master function to Stream Analytics through an intermediate event Hub. The architecture is provided below:
