export { get }

async function get(endpoint) {
  const response = await fetch('/api/' + endpoint)

  return response.json()
}
