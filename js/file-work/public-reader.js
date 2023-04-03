module.exports = {readPublicFiles}

async function readPublicFiles() {
  
}

async function buildFileListing() {

  const paths = await listFilePaths()

  

  console.log(`Found ${paths.length} files to list:`)

  
  
  
  console.log(paths)

  const contents = await Promise.all(paths.map(path => readFile(path)))

  for (let i = 0; i < paths.length; i++) {
    cache[paths[i].slice(7)] = contents[i]
  }
  
  return cache
}

const {listFilePaths} = require('./file-paths.js')
const {readFile} = require('fs/promises')
