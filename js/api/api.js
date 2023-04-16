module.exports = {handleAPI}

async function handleAPI(request, response, mongo) {
  const {respond, send} = prepareToRespond(response)
  const {method, url} = request 
  const endpoint = method.toLowerCase() + url.slice(4)
  const body = method == 'GET' ? null : await getBody(request) 

  console.log('endpoint requested: ' + endpoint)
  response.setHeader('Content-Type', 'application/json')

  if (endpoint == 'get/students') {
    const students = await mongo.read('students')
    
    console.log(students.length + ' student records found')
    send(students)
  } else
  if (endpoint == 'post/student') {
    const student = body
    const id = await mongo.create('students', student)
    
    if (id) {
      console.log(`Student with id ${id} is added`)
      respond({id})
    } else {
      console.log(`Unable to add student`)
      respond(false)
    }
  } else
  if (endpoint == 'delete/student') {
    const {id} = body
    const done = await mongo.delete('students', id)
    
    if (done) {
      console.log(`Student with id ${id} is removed`)
      respond(true)
    } else {
      console.log(`Unable to remove student with id ${id}`)
      respond(false)
    }
  } else
  if (endpoint == 'get/listing') {
    const listing = await buildFileListing()
    
    console.log(`File listing ${listing.length} characters long is sent`)
    response.end(listing)
  }
  else {
    response.end('no point to request ' + endpoint)
  }
}

const {prepareToRespond} = require('./respond.js')
const {getBody} = require('./body.js')
const {buildFileListing} = require('../file-work/listing.js')
