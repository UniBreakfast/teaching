module.exports = {getBody}

async function getBody(stream) {
  let body = ''
  
  for await (const chunk of stream) body += chunk

  return body
}
 
