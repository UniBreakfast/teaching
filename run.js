module.exports = {run}

async function run({server, mongo}) {
  console.log(server.toString(), mongo.toString())
  server.on('request', handleRequest(mongo))
}

const {handleRequest} = require('./req-listener.js')
