module.exports = {getReady}

async function getReady() {
  const [mongo, server] = await Promise.all([
    prepareHttpServer(),
    connectToMongo(),
  ])

  return {mongo, server}
}

const {prepareHttpServer} = require('./server.js')
const {connectToMongo} = require('./mongo.js')
