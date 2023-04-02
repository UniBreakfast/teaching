module.exports = {listFilePaths}

async function listFilePaths(path = '.') {
  const ents = await readdir(path, { withFileTypes: true });
  const paths = await Promise.all(dirents.map(ent => {
    const res = resolve(dir, ent.name);
    
    return ent.isDirectory() ? listFilePaths(res) : res;
  }));
  return [].concat(...paths);
}

const {readdir} = require('fs/promises')
const {resolve} = require('path')