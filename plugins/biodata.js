let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
╭══════════════════════
║╭─❉ *𝐁𝐈𝐎𝐃𝐀𝐓𝐀 𝐎𝐖𝐍𝐄𝐑* ❉─
║│➸ *Nama* : LαrαsChαnn🤸
║│➸ *Jantina* : Perempuan
║│➸ *Tempat Tinggal* :
║│➸ Indonesia
║│➸ *Agama* : Islam
║│➸ *Umur* : 16
║│➸ *Kelas* : 10 Smk
║│➸ *Status* : I'm Busy
║│➸ *Hobi* : 
║│➸ Anime,Music,Coding
║╰────────────────────
╰══════════════════════
╭══════════════════════
║╭─❉ *𝐒𝐎𝐒𝐈𝐀𝐋 𝐌𝐄𝐃𝐈𝐀* ❉──
║│➸ *No.Owner* : 
║│➸ wa.me/6285759662798
║│➸ *No.Bot* : 
║│➸ wa.me/6285759662798
║│➸ *Chanel Youtube* : 
║│➸ https://bit.ly/3uCVyeR
║│➸ *Gmail* : laras020103@gmail.com
║│➸ *Github* : https://github.com/Larasatilaras
║╰─────────────────────
╰═══════════════════════
_Oke segitu aja_

`.trim()
conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'Biodata')).buffer(), ext, 'Sc By LαrαsChαnn💌', 'Nomor Owner👤', '.owner', 'Donasi💰', '.donasi', 'Sewa Bot🤖', '.sewa', m)

}
handler.help = ['infoowner', 'infocreator']
handler.tags = ['info']
handler.command = /^(infoowner|infocreator)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
