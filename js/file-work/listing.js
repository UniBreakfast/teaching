module.exports = {buildFileListing}

async function buildFileListing() {
  const paths = await listFilePaths()
  
  console.log(`Found ${paths.length} files to list:`)
  console.log(paths)
  
  const contents = await Promise.all(paths.map(path => readFile(path)))
  
  let listing = ''
  
  for (let i = 0; i < paths.length; i++) {
    listing += `${paths[i]}\n\`\`\`\n${contents[i]}\n\`\`\`\n\n`
  }
  
  return listing
}

const {listFilePaths} = require('./file-paths.js')
const {readFile} = require('fs/promises')
