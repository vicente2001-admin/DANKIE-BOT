import fs from 'fs'
import { mediafiredl } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `${mg}πππππππ ππ ππππΌπΎπ ππΌπππΏπ πΏπ πππΏππΌππππ.\n\nπππππ πΌ ππΌπππΏ πππΏππΌππππ ππππ.`
try {
let res = await mediafiredl(args[0])
let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
let caption = `
βββγπΦΌ αΉπDANKIEπ!sβΉβ·β»βΉπΉβα΅α΅α΅β»α΄Ήα΄°γβ
βββ€οΈ${eg}π${gt} 
ββπ${vs}
ββββββΧβΧβΧβΧ
ββπ« ππππ½ππ | ππΌππ
ββπ§¨${filename}
ββββββΧβΧβΧβΧ
ββ πͺ ππππ |  ππππ
ββ β€οΈ ${filesizeH}
ββββββΧβΧβΧβΧ
ββ π ππππ | ππππ
ββ π₯ ${ext}
βββββΧβΧβΧβΧβββ`.trim()
conn.reply(m.chat, caption, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'βΝΝ‘β£πππππ_πππ_ππβΝΝ‘β£|YOVANI ',
body: 'Super Bot WhatsApp',         
previewType: 0, thumbnail: fs.readFileSync("./src/Menu2.jpg"),
sourceUrl: `https://github.com/Yovanihades1212/HADES-BOT-MDV2.git`}}})
  
let info = `ππΌπππ πΌ 150 ππ½ ππ πππππ½ππ πππ ππ ππ πππππ.

ππππΌπππ πππΌπ 150 ππ½ ππΌπ πππ π½π ππππ.`.trim()  
await conn.sendHydrated(m.chat, info, wm, null, ig, 'ππ£π¨π©πππ§ππ’', null, null, [
['ππππ', '/menu'],
['πππππποΈ', '/estado']
], m,)  
  
conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
} catch (e) { 
m.reply(`${fg}ππππππΌ πΌ πππππππΌπ. πΏππ½π πΏπ πππ ππ ππππΌπΎπ ππΌπππΏπ πΏπ πππΏππΌππππ.
ππππΌππ πππ πΌππΌππ. ππππ π½π πΌ ππΌπππΏ πππΏππΌππππ ππππ.`)
console.log(e)
}}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i
handler.exp = 100
export default handler
