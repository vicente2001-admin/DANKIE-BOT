import fs from 'fs'
function handler(m, { conn }) {
let text = `
βββγπΦΌ αΉπDANKIEπ!sβΉβ·β»βΉπΉβα΅α΅α΅β»α΄Ήα΄°γβ
ββπΎπ€π£π©πππ©π€ | πΎπ€π£π©πππ©
ββWa.me/51942563385(BOT)
ββWa.me/51917329232 (CREADOR)
βββββΧβΧβΧβΧβββ

*βΝΝ‘β£DANKIE_πππ_ππβΝΝ‘β£*
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'βΝΝ‘β£DANKIE_πππ_ππβΝΝ‘β£|VICENTE ',
body: 'ππ«ππππ¨π«o| ππ«πππ­π¨π«',         
previewType: 0, thumbnail: fs.readFileSync("./src/admins.jpg"),
sourceUrl: `https://wa.me/51917329232`}}})
  
//const data = global.owner.filter(([id, isCreator]) => id && isCreator)
//this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
let pp = 'https://i.imgur.com/lJsKtiP.jpeg'
let str = `π§‘ *Eso son los contactos para ti.*\nπ *That's the contacts for you.*`

conn.sendHydrated(m.chat, str, wm, pp, 'https://www.facebook.com/luisfernando.vicentehisbes.5', 'Perfil de facebook del CREADOR', null, null, [
['οΈππππππ', '.estado'],
['ππππ', '/menu']
], m,)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(contacto|owner|creator|propietario|dueΓ±a|dueΓ±o|propietaria|dueΓ±o|creadora|creador)$/i
export default handler
