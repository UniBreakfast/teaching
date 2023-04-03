module.exports = {getReady}

async function getReady() {
  const [fileCache, server, mongo] = await Promise.all([
    readPublicFiles(),
    prepareHttpServer(),
    connectToMongo(),
  ])
  
  console.log('everything is ready')

  return {fileCache, server, mongo}
}

const {readPublicFiles} = require('./file-work/public-reader.js')
const {prepareHttpServer} = require('./server/server.js')
const {connectToMongo} = require('./mongo-work/mongo.js')
