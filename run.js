module.exports = {run}

async function run({server, mongo}) {
  server.on('request', handleRequest(mongo))
  
  console.log('request handler is listening...')
}

const {handleRequest} = require('./req-listener.js')
