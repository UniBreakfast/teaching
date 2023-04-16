module.exports = { create }

async function create(collectionName, doc) {
  const collection = this.client.db(this.dbName).collection(collectionName)
  const {insertedId} = await collection.insertOne(doc)
  
  return insertedId
}
