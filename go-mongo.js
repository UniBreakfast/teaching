
const { MongoClient, ServerApiVersion } = require('mongodb')
const uri = process.env.MONGO_CONN_STR
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
client.connect().then(async () => {
  const studentsCollection = client.db("teaching").collection("students")
  await studentsCollection.insertOne({name: 'Yana Vozniuk', nCode: true})
  client.close()
}).catch(console.log)
