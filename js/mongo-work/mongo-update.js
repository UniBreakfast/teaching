module.exports = { update }

async function update(collectionName, id, data) {
  const collection = this.client.db(this.dbName).collection(collectionName)

  return collection.updateOne({_id: new ObjectId(id)}, {$set: data})
}

const {ObjectId} = require('mongodb')
