module.exports = {handleRequest}

function handleRequest(mongo) {
  return async function handleRequest(request, response) {
    const listing = await buildFileListing()
    response.end(listing)
  }
}

const {buildFileListing} = require('./listing.js')
