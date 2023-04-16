module.exports = { read }

async function read(collectionName) {
  const collection = this.client.db(this.dbName).collection(collectionName)
  
  return collection.find().toArray()
}
