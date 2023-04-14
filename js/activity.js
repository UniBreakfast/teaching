module.exports = {handleActivity}

async function handleActivity({fileCache, server, mongo}) {
  server.on('request', makeRequestHandler(fileCache, mongo))
  
  console.log('request handler is listening...')
}

const {makeRequestHandler} = require('./server/req-handler.js')
