module.exports = {handleRequest}

function handleRequest(mongo) {console.log(mongo)
  return async function handleRequest(request, response) {
    console.log(request.url, response)
    response.end('hi there!')
  }
}
