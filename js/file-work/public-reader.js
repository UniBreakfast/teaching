module.exports = {readPublicFiles}

async function readPublicFiles() {
  const paths = await listFilePaths('public')

  console.log(`Going to cache ${paths.length} public files:`)
  console.log(paths)

  const contents = await Promise.all(paths.map(path => readFile(path)))
  const cache = {}

  for (let i = 0; i < paths.length; i++) {
    cache[paths[i].slice(7)] = contents[i]
  }
  
  return cache
}

const {listFilePaths} = require('./file-paths.js')
const {readFile} = require('fs/promises')
