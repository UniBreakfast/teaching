module.exports = {serveFile}

async function serveFile(request, response, fileCache) {
  const path = request.url.slice(1) || "index.html"
  
  if (path in fileCache) {
    const fileContent = fileCache[path]
    
    response.end(fileContent)
  }
  else {
    response.end('File not found: ' + path)
  }
}
