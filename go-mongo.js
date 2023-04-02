
const { MongoClient, ServerApiVersion } = require('mongodb')
const uri = process.env.MONGO_CONN_STR
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
client.connect().then(() => {
  const studentsCollection = client.db("teaching").collection("students")
  studentsCollection.insertOne({name: 'Yana Vozniuk', nCode: true})
  client.close()
}).catch(console.log)
