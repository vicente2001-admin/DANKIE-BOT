import fetch from 'node-fetch'
let handler = async(m, { conn, text, command, usedPrefix }) => {
if (!text) return conn.reply(m.chat, `${mg}๐๐๐พ๐๐๐ฝ๐ผ ๐๐ ๐๐๐๐ฝ๐๐ ๐ฟ๐ ๐๐๐๐ผ๐๐๐ ๐ฟ๐ ๐๐๐๐๐๐ ๐๐๐ ๐๐๐ผ๐ "@"\n๐๐๐๐๐๐๐\n*${usedPrefix + command} mundo_dos_animes81*\n\n๐๐๐๐ ๐๐๐๐ ๐๐๐๐๐๐ ๐๐๐๐๐๐ผ๐๐ ๐๐๐๐๐๐๐ ๐๐๐๐๐ "@"\n๐๐๐ผ๐๐๐๐\n*${usedPrefix + command} universo_editx*`, m)
try {
let res = await fetch(`https://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=9b817532fadff8fc7cb86862`)
let res2 = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=9b817532fadff8fc7cb86862`
let json = await res.json()
if (res.status !== 200) throw await res.text()
if (!json.status) throw json
let thumb = await (await fetch(json.result.user_picture)).buffer()
let hades = `
โใ๐ึผ แน๐DANKIE๐!sโนโทโปโน๐นโแตแตแตโปแดนแดฐใ
โโ๐ค ๐๐๐๐ผ๐๐๐(๐ผ) | ๐๐๐๐
โโ๐ฎ${json.result.username}
โโโโโโืโืโืโืโ
โโโจ ๐๐๐๐ฝ๐๐ | ๐๐ผ๐๐
โโ๐ฅ${json.result.nickname}
โโโโโโืโืโืโืโ
โโโ ๐๐๐๐๐๐ฟ๐๐๐๐ | ๐๐๐๐๐๐๐๐๐ 
โโ๐${json.result.followers}
โโโโโโืโืโืโืโ
โโโ๏ธ ๐๐๐๐๐๐ฟ๐๐ | ๐๐๐๐๐๐๐๐๐
โโโฆ๏ธ${json.result.followings}
โโโโโโืโืโืโืโ
โโโค๏ธ ๐๐ ๐๐๐๐๐ผ | ๐๐๐๐๐
โโโจ${json.result.likes}
โโโโโโืโืโืโืโ
โโ๐ ๐๐๐ฝ๐๐๐พ๐ผ๐พ๐๐๐๐๐ | ๐๐๐๐๐
โโ๐${json.result.video}
โโโโโโืโืโืโืโ
โโ๐ ๐ฝ๐๐๐๐๐ผ๐ร๐ผ | ๐ฟ๐๐๐พ๐๐๐๐๐๐๐
โโ๐ป${json.result.bio}
โโโโโืโืโืโืโโโ`.trim()
await conn.sendFile(m.chat, res2, 'error.jpg', gata, m, false)
} catch (e) {
throw `${fg}๐๐ ๐๐ ๐๐๐พ๐๐๐๐๐ ๐๐ ๐๐๐๐ฝ๐๐ ๐ฟ๐ ๐๐๐๐ผ๐๐๐.\n\n๐๐ ๐๐๐๐๐๐ผ๐๐ ๐๐๐๐๐ฟ.`
}
let info = `๐ *Infรณrmate sobre las Novedades y recuerda tener la รบltima versiรณn.*\n\n๐ *Find out about what's new and remember to have the latest version.*
  `.trim()
  
await conn.sendHydrated(m.chat, info, wm, null, ig, '๐๐ฃ๐จ๐ฉ๐๐๐ง๐๐ข', null, null, [
['๐๐๐๐๐๐', '/estado'],
['๐ด๐ฌ๐ต๐ผ', '/menu'],
['๐๐๐๐๐๐๏ธ', '/grupos']
], m,)  

}
handler.help = ['tiktokstalk'].map(v => v + ' <username>')
handler.tags = ['stalk']
handler.command = /^(tiktokstalk|ttstalk)$/i
handler.exp = 48
export default handler
