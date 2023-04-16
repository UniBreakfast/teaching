module.exports = { prepareToRespond }

function prepareToRespond(response) {
  return {
    respond(data, success=true) {
      if (typeof data == "boolean") success = data
  
      response.end(JSON.stringify({success, ...data}))
    },
    send(data) {
      response.end(JSON.stringify(data))
    },
  } 
}
