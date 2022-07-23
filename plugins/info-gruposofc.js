let media = 'https://i.imgur.com/NRv6b71.jpeg'
let handler = async (m, { conn, command }) => {
let str = `
┌「☄️DANKIE_𝐁𝐎𝐓🤖」
├❏ ๖ۣۜۜ͜͡𝐇𝐨𝐥𝐚ঔৣֳ᷌᷈͜͡ 💖✨ HOLA TE ENVIAMOS UNIRTE AL LOS💖 GRUPOS OFICIALES DEL BOT DE👩‍🏫✨DANKIE_𝐁𝐎𝐓 SOMOS UNA FAMILIA DE BOTS 
└────ׂ─ׂ─ׂ─ׂ───
┌─「DANKIE_𝐁𝐎𝐓:1」─
├❏https://chat.whatsapp.com/F3rVxbvHOBVGp5YwnnBwdH
└────ׂ─ׂ─ׂ─ׂ───
┌─「DANKIE_𝐁𝐎𝐓:2」─
├❏https://chat.whatsapp.com/LQrJfDzyqmiFBtc8NOTbqf
└────ׂ─ׂ─ׂ─ׂ───
└────ׂ─ׂ─ׂ─ׂ───`.trim()
  
conn.sendHydrated(m.chat, str, wm, media, 'https://wa.me/51917329232', '𝙲𝚁𝙴𝙰𝙳𝙾𝚁', null, null, [
['𝐌𝐄𝐍𝐔', '/menu'],
['𝐄𝐒𝐓𝐀𝐃𝐎 ','/estado']
], m,)}

handler.command = /^linkgc|grupos|gruposgatabot|gatabotgrupos|gruposdegatabot|groupofc|gruposgb|grupogb|groupgb$/i
handler.exp = 33

export default handler
