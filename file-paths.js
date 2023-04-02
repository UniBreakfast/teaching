module.exports = {listFilePaths}

async function listFilePaths(path = '.') {
  const ents = await readdir(path, { withFileTypes: true })
  const paths = await Promise.all(ents.map(ent => {
    const res = resolve(path, ent.name)
    console.log(ent.name)
    if (ent.name == 'node_modules' || ent.name == '.git') return 
    
    return ent.isFile() ? res : listFilePaths(res)
  }));
  return paths.filter(Boolean).flat();
}

const {readdir} = require('fs/promises')
const {resolve} = require('path')
