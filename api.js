module.exports = {handleAPI}

async function handleAPI(request, response, mongo) {
  const listing = await buildFileListing()
  console.log('h')
  response.end(listing)
}

const {buildFileListing} = require('./listing.js')
