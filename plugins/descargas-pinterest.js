import { pinterest } from '@bochilteam/scraper'
let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${mg} ๐๐๐ ๐ฟ๐ ๐๐ผ ๐๐๐๐๐๐๐๐๐ ๐๐ผ๐๐๐๐ผ\n*${usedPrefix + command} hades*\n\n๐๐๐ ๐พ๐๐๐๐ผ๐๐ฟ ๐๐๐๐\n*${usedPrefix + command} Cat*` 
const json = await pinterest(text)
await conn.sendFile(m.chat, json.getRandom(), 'error.jpg', `
โฐโฑ๐โฑ *๐ฬ๐๐๐๐ | ๐๐๐พ๐พ๐๐๐* โฑ๐โฑโฎ`.trim(), m)
  
  conn.sendHydrated(m.chat, `๐ ๐๐๐จ๐ช๐ก๐ฉ๐๐๐ค | ๐๐๐จ๐ช๐ก๐ฉ: ${text}`, `๐๐๐ฃ๐ฉ๐๐ง๐๐จ๐ฉ | ${wm}`, null, md, 'โออกโฃDANKIE_๐๐๐_๐๐โออกโฃ', null, null, [
['โ๏ธ๐๐๐๐ช๐๐๐ฃ๐ฉ๐โถ๏ธ |๐๐๐๐ญ๐ฉ', `/pinterest ${text}`],
['๐๐๐๐๐๐', '/estado'],
['๐ด๐ฌ๐ต๐ผ', '/menu'],
], m)
                    }
handler.help = ['pinterest <keyword>']
handler.tags = ['internet']
handler.command = /^(pinterest|dlpinterest|pinterestdl)$/i
handler.exp = 25
export default handler
