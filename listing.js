module.exports = {buildFileListing}

async function buildFileListing() {
  const paths = await listFilePaths()
  console.log(paths)
  const contents = await Promise.all(paths.map(readFile))
  
  let listing = ''
  
  for (let i = 0; i < paths.length; i++) {
    listing += `${path}\n\`\`\`\n${content}\n\`\`\`\n\n`
  }
  
  return listing
}

const {listFilePaths} = require('./file-paths.js')
const {readFile} = require('fs/promises')
