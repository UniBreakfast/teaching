module.exports = {prepareHttpServer}

async function prepareHttpServer() {
  const server = createServer()

  server.on('request', preHandler)

  return new Promise((resolve, reject) => {
    server.on('error', reject)

    try {
      server.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`)
        resolve(server)
      })
    } catch (err) {
      reject(err)
    }
  })
}

const port = process.env.PORT
const {createServer} = require('http')
const {preHandler} = require('./req-handler.js')
