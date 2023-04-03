module.exports = {handleAPI}

async function handleAPI(request, response, mongo) {
  const listing = await buildFileListing()
  
  response.end(listing)
}

const {buildFileListing} = require('./listing.js')
