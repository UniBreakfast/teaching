module.exports = {handleRequest}

function handleRequest(mongo) {
  return async function handleRequest(request, response) {
    response.end('hi there!')
  }
}
