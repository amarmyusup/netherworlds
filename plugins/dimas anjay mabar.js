let fs = require('fs')
let handler = async (m) => {
let dms = fs.readFileSync('./mp3/dimasanjaymabar.opus')
conn.sendFile(m.chat, dms, '', '', m, true)
}

handler.customPrefix = /^(dimas|anjay|dimas anjay|anjai|dimas anjay mabar|mabar|dimas anjai mabar)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = true
handler.private = false

module.exports = handler
