const {getReady} = require('./ready.js')
const {run} = require('./run.js')

getReady().then(run)

