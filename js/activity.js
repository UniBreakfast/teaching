module.exports = {handleActivity}

async function handleActivity({fileCache, server, mongo}) {
  server.off('request', preHandler)
  server.on('request', makeRequestHandler(fileCache, mongo))
  
  console.log('request handler is listening...')
}

const {makeRequestHandler, preHandler} = require('./server/req-handler.js')
