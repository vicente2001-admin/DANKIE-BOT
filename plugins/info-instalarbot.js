import fs from 'fs'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let text = `
┌「𝙸𝙽𝚂𝚃𝙰𝙻𝙰𝙲𝙸𝙾𝙽 𝙳𝙴𝙻 𝙱𝙾𝚃」
├❏ ๖ۣۜۜ͜͡𝐇𝐨𝐥𝐚 gracias por 🥳solicitar la instalación 🤖 del bor gracias por tu preferencia te dejaré los requisitos para 👩‍💻instalar el bot cualquier duda puedes contactarme a mi número personal en caso de si  necesitas ayuda para instalar 🤴
└────ׂ─ׂ─ׂ─ׂ───
┌「𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴𝚕 𝙼𝙸 𝙲𝚁𝙴𝙰𝙳𝙾𝚁」
├❏http://wa.me/51917329232
└────ׂ─ׂ─ׂ─ׂ───
┌「𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝚁𝙴𝙲𝙾𝙼𝙴𝙽𝙳𝙰𝙳𝙾 」
├❏https://www.mediafire.com/file/3lzk2l83di64tc2/%E2%98%BB%EF%B8%8F+%F0%9D%94%B8%F0%9D%95%93%F0%9D%95%A6+%F0%9D%94%B9%F0%9D%95%83%F0%9D%94%B8%E2%84%82%F0%9D%95%82+%E2%98%BB%EF%B8%8F.apk/file?dkey=ihcz5i82z0m431
└────ׂ─ׂ─ׂ─ׂ───
┌「𝚃𝙴𝚁𝙼𝚄𝚇」
├❏https://www.mediafire.com/file/190g4b86nhyof7b/com.termux_118.apk/file?dkey=wfddtbi5jtj98
└────ׂ─ׂ─ׂ─ׂ───
┌「𝚃𝚞𝚝𝚘𝚛𝚒𝚊𝚕: 𝚙𝚕𝚊𝚢 :」
├❏https://www.youtube.com/channel/UC_dDA5ENZl9_8ZhDqljLybQ
└────ׂ─ׂ─ׂ─ׂ───
(depende del
├❏WhatsApp igual)
└────ׂ─ׂ─ׂ─ׂ───`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽 - 𝙸𝙽𝚂𝚃𝙰𝙻𝙰𝚁𝙱𝙾𝚃',
body: '𓈃ּ ៹🍏Dankie𐂂!s⁹⁷☻‹𝟹♞ᵇᵒᵗ⁻ᴹᴰ',         
previewType: 0, thumbnail: fs.readFileSync("./src/Pre Bot Publi.png"),
sourceUrl: `https://github.com/Yovanihades1212/HADES-BOT-MDV2.git`}}})   
}
handler.command = /^(instalarbot)/i
export default handler
