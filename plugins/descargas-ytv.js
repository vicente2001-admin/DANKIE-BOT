import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';
let handler = async (m, { conn, args, isPrems, isOwner, command, usedPrefix }) => {
if (!args || !args[0]) throw `${mg}πππππππ ππ ππππΌπΎπ πΏπ ππππππ½π ππΌππΌ πΏπππΎπΌπππΌπ ππ πππΏππ\nπππππππ\n*${usedPrefix + command} https://youtu.be/aPu9wQi-z8U*\n\nπππππ πππ ππππππ½π ππππ ππ πΏππππππΌπΏ πππ πππΏππ\nπππΌππππ\n*${usedPrefix + command} https://youtu.be/aPu9wQi-z8U*`
try {
let { thumbnail, video, title } = await youtubedl(args[0])
.catch(async () => await youtubedlv2(args[0]))
let link = await video['480p'].download()
const isY = /y(es)/gi.test(args[1])
const limitedSize = (isPrems || isOwner ? 350 : 200) * 3074
let isLimit = limitedSize < video['480p'].fileSize
if (!isY) await conn.sendFile(m.chat, thumbnail, 'thumbnail.jpg', `
βββγ${wm}γβ
ββππππππ | πππππ
ββπ${title}
ββππ§‘ ππππ | ππππ
ββπ${video['480p'].fileSizeH}
βββγ${vs}γβββΧ`.trim(), m)
  
await conn.sendFile(m.chat, link, title + '.mp3', `
βββγ${wm}γβ
ββππππππ | πππππ
ββπ${title}
ββππ§‘ ππππ | ππππ
ββπ${video['480p'].fileSizeH}
βββγ${vs}γβββ`.trim(), m, null, {
  
asDocument: 0
})
}catch(e){
m.reply(`${fg}ππ πππππ½ππ πππ ππ πΌππΎππππ πππΌ πππ ππππΌπΏπ. πππππππ πΎππ ππππ\n\nππ ππ ππππππ½ππ πππΌπ πππ ππππ ππ ππππ πππΌππ. πππ πΌππππππ`)
console.log(e)  
}
  
let info = `π *InfΓ³rmate sobre las Novedades y recuerda tener la ΓΊltima versiΓ³n.*\n\nπ *Find out about what's new and remember to have the latest version.*
  `.trim()
  
conn.sendHydrated(m.chat, info, wm, null, ig, 'ππ£π¨π©πππ§ππ’', null, null, [
['ππππππ', '/grupos'],
['ππππππ', '.estado'],
['π΄π¬π΅πΌ', '/menu']
], m,) 

}
handler.help = ['mp4', 'v'].map(v => 'yt' + v + ` <url>`)
handler.tags = ['downloader']
handler.command = /^yt(v|mp4)?$/i
handler.exp = 0
export default handler
