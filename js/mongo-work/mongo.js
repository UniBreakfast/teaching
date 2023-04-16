module.exports = { connectToMongo }

async function connectToMongo() {
  const client = new MongoClient(uri, options)

  do {
    try {
      await client.connect()

      break
    } catch (err) {
      console.error(err)

      await sleep(10e3)
    }
  } while (true)

  console.log('Mongo client connected to cluster0')

  return { dbName: 'teaching', client, create, read, update, delete: delete_}
}

const uri = process.env.MONGO_CONN_STR
const options = { useNewUrlParser: true, useUnifiedTopology: true, serverApi: '1' }

const { MongoClient } = require('mongodb')
const { sleep } = require('../helpers/sleep.js')
const { create } = require('./mongo-create.js')
const { read } = require('./mongo-read.js')
const { update } = require('./mongo-update.js')
const { delete_ } = require('./mongo-delete.js')
