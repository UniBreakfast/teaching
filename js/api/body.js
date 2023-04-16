module.exports = {getBody}

async function getBody(stream) {
  let body = ''
  
  for await (const chunk of stream) body += chunk

  try {
    return JSON.parse(body)
  } catch {
    return body
  }
}
