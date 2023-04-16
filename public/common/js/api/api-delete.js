export { delete_ }

async function delete_(endpoint, data) {
  const response = await fetch('/api/' + endpoint, {...init, body: JSON.stringify(data)})

  return response.json()
}

const init = { method: 'DELETE', headers: {'Content-Type': 'application/json'}}
