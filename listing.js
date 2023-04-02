module.exports = {buildFileListing}

async function buildFileListing() {
  const paths = await listFilePaths()
  const contents = await Promise.all(paths.map(readFile))
  
  let listing = ''
  
  for (let i = 0; i < paths.length; i++) {
    listing += `${path}\n\`\`\`\n${content}\n\`\`\`\n\n`
  }
  
  return listing
}

const {readFile} = require('fs/promises')
