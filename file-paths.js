module.exports = {listFilePaths}

async function listFilePaths(path = '.') {
  const ents = await readdir(path, { withFileTypes: true });
  const paths = await Promise.all(ents.map(ent => {
    const res = resolve(path, ent.name);
    console.log({res})
    return ent.isDirectory() ? listFilePaths(res) : res;
  }));
  console.log({paths})
  return [].concat(...paths);
}

const {readdir} = require('fs/promises')
const {resolve} = require('path')
