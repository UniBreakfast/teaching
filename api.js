module.exports = {handleAPI}

async function handleAPI(request, response, mongo) {
  const listing = await buildFileListing()
  console.log(`File listing ${listing.length} characters long is sent`)
  response.end(listing)
}

const {buildFileListing} = require('./listing.js')
