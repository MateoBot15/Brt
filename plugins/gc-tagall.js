let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `@𝐜𝐨𝐦𝐮𝐧𝐢𝐝𝐚𝐝_𝐛𝐫𝐭_: ${pesan}`
let teks = `𝐑𝐞𝐯𝐢𝐯𝐚𝐧 𝐈𝐍𝐒𝐀𝐍𝐎𝐒 \n\n❏ ${oi}\n❏ 🫶🏻 ➢ 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂:: \n`
for (let mem of participants) {
teks += `🍫🍫  @${mem.id.split('@')[0]}\n`}
teks += `🐾𝐎𝐑𝐆𝐀𝐍𝐈𝐙𝐀 : 𝐁𝐑𝐓𝐌 - 𝐀𝐋𝐕𝐀𝐑𝐎 - 𝐈𝐀𝐑𝐀 - 𝐂𝐎𝐍𝐓𝐀𝐍𝐙𝐀`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.register = true
export default handler
