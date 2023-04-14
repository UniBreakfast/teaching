module.exports = { makeRequestHandler, preHandler }

function makeRequestHandler(fileCache, mongo) {
  return async function handleRequest(request, response) {
    const { method, url } = request

    console.log(`${method} ${url} requested`)

    if (url.startsWith('/api/')) {
      handleAPI(request, response, mongo)
    } else {
      serveFile(request, response, fileCache)
    }
  }
}

function preHandler(_, response) {
  response.end(
    `
      <script>
        setInterval(() => h1.innerText += '.', 333)
        setTimeout(() => location.href = "/", 9999)
      </script>
      <h1 id="h1">LOADING</h1>
    `
  )
}

const { serveFile } = require('./file-server.js')
const { handleAPI } = require('../api/api.js')
