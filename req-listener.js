module.exports = {handleRequest}

function handleRequest(mongo) {
  return async function handleRequest(request, response) {
    const {url} = request
    
    if (url.startsWith('/api/')) {
      handleAPI(request, response, mongo);
    } else {
      serveFile(request, response);
    }
  }
}

const {serveFile} = require('./file-server.js')
const {handleAPI} = require('./api.js')
