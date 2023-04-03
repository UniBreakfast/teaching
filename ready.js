module.exports = {getReady}

async function getReady() {
  const [server, mongo] = await Promise.all([
    prepareHttpServer(),
    connectToMongo(),
  ])
  
  console.log('everything is ready')

  return {mongo, server}
}

const {prepareHttpServer} = require('./server.js')
const {connectToMongo} = require('./mongo.js')
