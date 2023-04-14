const {getReady} = require('./js/ready.js')
const {handleActivity} = require('./js/activity.js')

getReady().then(handleActivity)
