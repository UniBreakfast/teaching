module.exports = {handleRequest}

function handleRequest(fileCache, mongo) {
  return async function handleRequest(request, response) {
    const {method, url} = request
    
    console.log(`${method} ${url} requested`)
    
    if (url.startsWith('/api/')) {
      handleAPI(request, response, mongo)
    } else {
      serveFile(request, response, fileCache)
    }
  }
}

const {serveFile} = require('./file-server.js')
const {handleAPI} = require('../api/api.js')
