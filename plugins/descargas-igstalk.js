import { instagramStalk } from '@bochilteam/scraper'

let handler= async (m, { args, usedPrefix, command }) => {
if (!args[0]) throw `${mg}πππππππ ππ ππππΌπππ πΏπ πΌππππππ πΏπ πππππΌπππΌπ\nπππππππ\n*${usedPrefix + command} hades*\n\nπππππ πππππΌπππΌπ ππππππΌππ\nπππΌππππ\n*${usedPrefix + command} gata_dios*`
const {
username,
name,
description,
followersH,
followingH,
postsH,
} = await instagramStalk(args[0])
m.reply(`
βγπΦΌ αΉπDANKIEπ!sβΉβ·β»βΉπΉβα΅α΅α΅β»α΄Ήα΄°γ
ββ ΰΉΫ£ΫΝ‘ΝΫππ¨π₯πΰ¦ΰ§£Ν‘Να·Φ³α· ${name}πβ¨
ββ π ${gt} ${vs}
βββββΧβΧβΧβΧββ 
ββπ₯ ππππ½ππ | ππΌππ
ββ ${name}
βββββΧβΧβΧβΧββ 
ββπ§¨ππππΌπππ(πΌ) | ππππ
ββ${username}
βββββΧβΧβΧβΧββ 
βββ¨ ππππΌπΎπ | ππππ
ββhttps://instagram.com/${username.replace(/^@/, '')}*
βββββΧβΧβΧβΧββ
ββπ ππππππΏππππ | πππππππππ 
ββ${followersH}
βββββΧβΧβΧβΧββ 
ββπ ππππππΏππ | πππππππππ
ββ${followingH}
βββββΧβΧβΧβΧββ 
βββ€οΈ πππ½πππΎπΌπΎπππππ | πππππ
ββ${postsH}*
βββββΧβΧβΧβΧββ 
ββπ©βπ» π½πππππΌπΓπΌ | πΏπππΎπππππππ
ββ${description}
βββββΧβΧβΧβΧβββ`.trim()) 
  
  let info = `π *InfΓ³rmate sobre las Novedades y recuerda tener la ΓΊltima versiΓ³n.*\n\nπ *Find out about what's new and remember to have the latest version.*
  `.trim()
  
await conn.sendHydrated(m.chat, info, wm, null, ig, 'ππ£π¨π©πππ§ππ’', null, null, [
['ππππ', '/menu'],
['πππππποΈ', '/estado']
], m,)  
  
}
handler.help = ['igstalk'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(igstalk|verig|igver)$/i
handler.exp = 80
export default handler

