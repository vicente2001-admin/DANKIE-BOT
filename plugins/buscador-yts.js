import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { text }) => {
if (!text) throw `${mg}πππΎπππ½πΌ ππ ππππ½ππ πΏπ ππ πππΏππ π πΎπΌππΌπ πΏπ ππππππ½π\n\nπππππ ππΌππ ππ πΌ ππππππ½π πππΏππ ππ πΎππΌππππ`
const { video, channel } = await youtubeSearch(text)
let teks = [...video, ...channel].map(v => {
switch (v.type) {
case 'video': return `
βγπΦΌ αΉπDANKIEπ!sβΉβ·β»βΉπΉβα΅α΅α΅β»α΄Ήα΄°γ
βββ¨ *${v.title}* 
ββπ (${v.url})
βββ³ *DuraciΓ³n:* ${v.durationH}
ββπ *Fecha:* de subida: ${v.durationH}
ββπ *Vistas:* ${v.view} 
βββββΧβΧβΧβΧβββ`.trim()
      case 'channel': return `
βγπΦΌ αΉπDANKIEπ!sβΉβ·β»βΉπΉβα΅α΅α΅β»α΄Ήα΄°γ
βββ¨ *${v.channelName}* 
ββ(${v.url})
ββπ₯ *Subscriptores:* ${v.subscriberH} 
ββπ₯ *Videos:* ${v.videoCount}  
βββββΧβΧβΧβΧβββ
`.trim()
    }
  }).filter(v => v).join('\n====================================\n')
 await m.reply(teks)
 let info = `π *InfΓ³rmate sobre las Novedades y recuerda tener la ΓΊltima versiΓ³n.*\n\nπ *Find out about what's new and remember to have the latest version.*
  `.trim()
await conn.sendHydrated(m.chat, info, wm, null, ig, 'ππ£π¨π©πππ§ππ’', null, null, [
['ππππππ', '/estado'],
['π΄π¬π΅πΌ', '/menu'],
['πππππποΈ', '/grupos']
], m,)      
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^ytbuscar|yts(earch)?$/i
handler.exp = 70
export default handler
