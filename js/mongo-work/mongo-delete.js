module.exports = { delete_ }

async function delete_(collectionName, id) {
  const collection = this.client.db(this.dbName).collection(collectionName)
  const {acknowledged} = await collection.deleteOne({_id: new ObjectId(id)})
  
  return acknowledged
}

const {ObjectId} = require('mongodb')
