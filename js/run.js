module.exports = {run}

async function run({fileCache, server, mongo}) {
  server.on('request', handleRequest(fileCache, mongo))
  
  console.log('request handler is listening...')
}

const {handleRequest} = require('./server/req-listener.js')
