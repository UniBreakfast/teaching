export { post }

async function post(endpoint, data) {
  const response = await fetch('/api/' + endpoint, {...init, body: JSON.stringify(data)})

  return response.json()
}

const init = { method: 'POST', headers: {'Content-Type': 'application/json'}}
