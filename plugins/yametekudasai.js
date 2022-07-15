let fs = require('fs')
let handler = async (m) => {
let yametekudasai = fs.readFileSync('./mp3/yametekudasai.opus')
conn.sendFile(m.chat, yametekudasai, '', '', m, true)
}

handler.customPrefix = /^(yamete|yametekudasai|yamete kudasai|ymete)$/i
handler.command = new RegExp

handler.limit = true

module.exports = handler
