import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[ ⚠️ ] Los comandos +18 estan desactivados en este grupo, si es administrador de este grupo y desea activarlos escriba #enable nsfw*'
let url = packgirl[Math.floor(Math.random() * packgirl.length)]
conn.sendButton(m.chat, `_🥵 Pack 2 🥵_`, author, url, [['◀️𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴▶️', `/${command}`]], m)
}
handler.help = ['pack2']
handler.tags = ['internet']
handler.command = /^(pack2)$/i
export default handler

global.packgirl = [
  "https://i.imgur.com/l56H85q.jpg"
]
