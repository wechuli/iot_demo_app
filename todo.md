# TODO
- Deployment of the function code could be a bit more elegant, work on configuring source control to automatically deploy from a repo.
- Explore Azure Storage (or Azure Data Lake) for storage of data, possibly retain CosmosDB as a warm storage option where data is stored for a maximum of 30 days to allow fast queries for 'fresh' data but store all historical data on a less expensive solution such as Azure Data Lake.
- Explore visualization options beyond the IoT Central Application, Power BI (use the streaming service for streaming data and connect to the Azure Cosmos DB to build reports from historical data)
