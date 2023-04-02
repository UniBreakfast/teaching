module.exports = {listFilePaths}

async function listFilePaths(path = '.') {
  const ents = await readdir(path, { withFileTypes: true });
  const paths = await Promise.all(ents.map(ent => {
    const res = resolve(path, ent.name);
    console.log({res})
    if (ent.isDirectory() && ent.name !== 'node_modules') {
      return listFilePaths(res);
    } else if (ent.isFile()) {
      return res;
    }
  }));
  return paths.filter(Boolean).flat();
}

const {readdir} = require('fs/promises')
const {resolve} = require('path')
