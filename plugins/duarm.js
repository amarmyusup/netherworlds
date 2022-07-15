let fs = require('fs')
let handler = async (m) => {
let duarm = fs.readFileSync('./mp3/duarm.opus')
conn.sendFile(m.chat, duarm, '', '', m, true)
}

handler.customPrefix = /^(duar|duarr|duarrr|duar mmek)$/i
handler.command = new RegExp

handler.limit = true

module.exports = handler

