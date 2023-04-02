module.exports = {run}

async function run({server, mongo}) {
  server.on('request', handleRequest(mongo))
}

const {handleRequest} = require('./req-listener.js')
