module.exports = {serveFile}

async function serveFile(request, response, fileCache) {
  const path = request.url.slice(1) || "index.html"
  
  if (path in fileCache) {
    const fileContent = fileCache[path]
    
    console.log(`going to send ${fileContent.length} chars from ${path}`)
    
    response.end(fileContent)
  }
  else {
    console.log(`nothing found at ${path}`)
    
    response.end('File not found: ' + path)
  }
}
