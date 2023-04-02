module.exports = {connectToMongo}

async function connectToMongo() {
  const client = new MongoClient(uri, options)

  await client.connect()
  
  console.log('Mongo client connected to cluster0')

  return client
}

const { MongoClient, ServerApiVersion } = require('mongodb')
const uri = process.env.MONGO_CONN_STR
const options = { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 }


