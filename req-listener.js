module.exports = {handleRequest}

function handleRequest(mongo) {
  return async function handleRequest(request, response) {
    console.log(request.url, response.toString())
    response.end('hi there!')
  }
}
