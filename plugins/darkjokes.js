let handler = async (m, { conn }) => {
    conn.sendFile(m.chat, global.API('xteam', '/asupan/darkjoke', {}, 'APIKEY'), '', 'gelapp padahal ada lampu', m)
}
handler.help = ['darkjokes']
handler.tags = ['internet']
handler.command = /^(darkjoke|darkjokes)$/i

module.exports = handler