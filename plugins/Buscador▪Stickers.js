
import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, {text, usedPrefix, command, conn}) => {
let sfoto = fs.readFileSync('./src/Menu2.jpg')
if (!text) throw `*β οΈ Ingrese el nombre del paquete de stickers que desea buscar.*`

let json = await fetch(`https://api.zacros.my.id/search/sticker?query=${text}`)
let jsons = await json.json()
  let res = jsons.result.map((v, index) => `*πͺ΄ β’ Resultado:* ${1 + index}\n*π΅ β’ Nombre:* ${v.title}\n*π β’ Url:* ${v.url}`).join`\n\nβββ\n\n`
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let buttonMessage= {
'document': { url: `https://github.com/Yovanihades1212/HADES-BOT-MDV2.git` },
'mimetype': `application/${document}`,
'fileName': `βΈ½βπππ π·π°π³π΄π π±πΎπ - MDπβ¨αββ°`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/Yovanihades1212/HADES-BOT-MDV2.git',
'mediaType': 2,
'previewType': 'pdf',
'title': `β’ Resultados Encontradosπ`,
'body': global.author,
'thumbnail': sfoto,
'sourceUrl': 'https//wa.me/5212411719888'}},
'caption': res,
'footer': 'β’ *Si desea descargar un*\n*paquete de sticker escriba*\n*/stickerpack <URL>*',
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: 'MenΓΊ π'}, type: 1}, 
{buttonId: `${usedPrefix}infobot`, buttonText: {displayText: 'Info π'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}

handler.tags = ['search']
handler.command = handler.help = ['stickersearch', 'searchsticker']
export default handler
