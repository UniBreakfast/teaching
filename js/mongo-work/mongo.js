module.exports = {connectToMongo}

async function connectToMongo() {
  const client = new MongoClient(uri, options)

  do {
    try {
      await client.connect()

      break
    } catch (err) {
      console.error(err)
    }
  } while (true)
  
  console.log('Mongo client connected to cluster0')
  await sleep(15000)
  return client
}

const { MongoClient, ServerApiVersion } = require('mongodb')
const uri = process.env.MONGO_CONN_STR
const options = { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 }

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
