module.exports = {handleAPI}

async function handleAPI(request, response, mongo) {
  const endpoint = request.url.slice(5)

  console.log('endpoint requested: ' + endpoint)

  if (endpoint == 'students') {
    const studentsCollection = mongo.db('teaching').collection('students')
    const students = await studentsCollection.find().toArray()
    
    console.log(students.length + ' student records found')

    response.setHeader('Content-Type', 'application/json')
    response.end(JSON.stringify(students))
  } else
  if (endpoint == 'listing') {
    const listing = await buildFileListing()
    
    console.log(`File listing ${listing.length} characters long is sent`)
    response.end(listing)
  }
  else {
    response.end('no point to request ' + endpoint)
  }
}

const {buildFileListing} = require('../file-work/listing.js')
