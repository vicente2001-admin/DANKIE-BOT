import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, {command, conn, text, usedPrefix, args}) => {
if (!text) throw `${mg}πΏππ½π πππππππΌπ ππ ππππΌπΎπ πΏπ ππππππ ππΌππΌ πΏπππΎπΌπππΌπ ππ πππΏππ\nπππππππ\n*${usedPrefix + command} https://vm.tiktok.com/ZMLEPnruc/?k=1*\n\nπππ ππππ πππππ πΌ ππππππ ππππ ππ πΏππππππΌπΏ πππΏππ\nπππΌππππ\n*${usedPrefix + command} https://vm.tiktok.com/ZMLEPnruc/?k=1*`
//if (command == 'tiktokaudio') {
//conn.reply(m.chat, `${eg}PRONTO TENDRA EL VIDEO DE TIKTOK*`, m, {
//contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
//title: βΝΝ‘β£πππππ_πππ_ππβΝΝ‘β£'|YOVANI ',
//body: 'Super Bot WhatsApp',         
//previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
//sourceUrl: `http hadesBot-MD`}}})
           
//let res = await fetch("https://api.dhamzxploit.my.id/api/tiktod/?url="+args[0])
//let json = await res.json()
//conn.sendFile(m.chat, json.result.audio, 'error.mp3', null, m, false, { mimetype: 'mp3/mp4' })}

conn.reply(m.chat, `${eg}ππππππ ππππΏππΌ ππ πππΏππ πΏπ ππππππ \nππππ ππππ ππΌππ πππ ππππππ πππΏππ π₯³`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'βΝΝ‘β£πππππ_πππ_ππβΝΝ‘β£|YOVANI ',
body: 'Super Bot WhatsApp',         
previewType: 0, thumbnail: fs.readFileSync("./src/Menu2.jpg"),
sourceUrl: `https://hades`}}})
  
let res = await fetch("https://api.dhamzxploit.my.id/api/tiktod/?url="+args[0])
let json = await res.json()
await conn.sendFile(m.chat, json.result.nowatermark, 'error.mp4', `${wm}`, m)

let info = `π *InfΓ³rmate sobre las Novedades y recuerda tener la ΓΊltima versiΓ³n.*\n\nπ *Find out about what's new and remember to have the latest version.*
  `.trim()
  
await conn.sendHydrated(m.chat, info, wm, null, ig, 'ππ£π¨π©πππ§ππ’', null, null, [
['ππππππ', '/estado'],
['π΄π¬π΅πΌ', '/menu'],
['πππππποΈ', '/grupos']
], m,)   
           
}
handler.help = ['tiktok'].map(v => v + ' <link>')
handler.tags = ['downloader']
handler.command = ['tiktok']
handler.exp = 60
export default handler
