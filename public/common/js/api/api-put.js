export { put }

async function put(endpoint, data) {
  const response = await fetch('/api/' + endpoint, {...init, body: JSON.stringify(data)})

  return response.json()
}

const init = { method: 'PUT', headers: {'Content-Type': 'application/json'}}
