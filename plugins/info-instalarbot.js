import fs from 'fs'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let text = `
βγπΈπ½πππ°π»π°π²πΈπΎπ½ π³π΄π» π±πΎπγ
ββ ΰΉΫ£ΫΝ‘ΝΫππ¨π₯π gracias por π₯³solicitar la instalaciΓ³n π€ del bor gracias por tu preferencia te dejarΓ© los requisitos para π©βπ»instalar el bot cualquier duda puedes contactarme a mi nΓΊmero personal en caso de si  necesitas ayuda para instalar π€΄
βββββΧβΧβΧβΧβββ
βγπ½ππΌπ΄ππΎ π³π΄π πΌπΈ π²ππ΄π°π³πΎπγ
ββhttp://wa.me/51917329232
βββββΧβΧβΧβΧβββ
βγππ·π°πππ°πΏπΏ ππ΄π²πΎπΌπ΄π½π³π°π³πΎ γ
ββhttps://www.mediafire.com/file/3lzk2l83di64tc2/%E2%98%BB%EF%B8%8F+%F0%9D%94%B8%F0%9D%95%93%F0%9D%95%A6+%F0%9D%94%B9%F0%9D%95%83%F0%9D%94%B8%E2%84%82%F0%9D%95%82+%E2%98%BB%EF%B8%8F.apk/file?dkey=ihcz5i82z0m431
βββββΧβΧβΧβΧβββ
βγππ΄ππΌππγ
ββhttps://www.mediafire.com/file/190g4b86nhyof7b/com.termux_118.apk/file?dkey=wfddtbi5jtj98
βββββΧβΧβΧβΧβββ
βγππππππππ: ππππ’ :γ
ββhttps://www.youtube.com/channel/UC_dDA5ENZl9_8ZhDqljLybQ
βββββΧβΧβΧβΧβββ
(depende del
ββWhatsApp igual)
βββββΧβΧβΧβΧβββ`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'πΈπ½π΅πΎππΌπ°π²πΈπΎπ½ - πΈπ½πππ°π»π°ππ±πΎπ',
body: 'πΦΌ αΉπDankieπ!sβΉβ·β»βΉπΉβα΅α΅α΅β»α΄Ήα΄°',         
previewType: 0, thumbnail: fs.readFileSync("./src/Pre Bot Publi.png"),
sourceUrl: `https://github.com/Yovanihades1212/HADES-BOT-MDV2.git`}}})   
}
handler.command = /^(instalarbot)/i
export default handler
