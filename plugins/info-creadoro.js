import fs from 'fs'
function handler(m, { conn }) {
let text = `
┌──「𓈃ּ ៹🍏DANKIE𐂂!s⁹⁷☻‹𝟹♞ᵇᵒᵗ⁻ᴹᴰ」─
├❏𝘾𝙤𝙣𝙩𝙖𝙘𝙩𝙤 | 𝘾𝙤𝙣𝙩𝙖𝙘𝙩
├❏Wa.me/51942563385(BOT)
├❏Wa.me/51917329232 (CREADOR)
└────ׂ─ׂ─ׂ─ׂ───

*❍͜͡➣DANKIE_𝐁𝐎𝐓_𝐌𝐃❍͜͡➣*
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '❍͜͡➣DANKIE_𝐁𝐎𝐓_𝐌𝐃❍͜͡➣|VICENTE ',
body: '𝐂𝐫𝐞𝐚𝐝𝐨𝐫o| 𝐂𝐫𝐞𝐚𝐭𝐨𝐫',         
previewType: 0, thumbnail: fs.readFileSync("./src/admins.jpg"),
sourceUrl: `https://wa.me/51917329232`}}})
  
//const data = global.owner.filter(([id, isCreator]) => id && isCreator)
//this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
let pp = 'https://i.imgur.com/VUfC0Ge.png'
let str = `🧡 *Eso son los contactos para ti.*\n💜 *That's the contacts for you.*`

conn.sendHydrated(m.chat, str, wm, pp, 'https://www.facebook.com/luisfernando.vicentehisbes.5', 'Perfil de facebook del CREADOR', null, null, [
['️𝐄𝐒𝐓𝐀𝐃𝐎', '.estado'],
['𝐌𝐄𝐍𝐔', '/menu']
], m,)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(contacto|owner|creator|propietario|dueña|dueño|propietaria|dueño|creadora|creador)$/i
export default handler
