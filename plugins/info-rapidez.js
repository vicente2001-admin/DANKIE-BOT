let handler = async m => {
 let old = performance.now()
 let neww = performance.now()
 let speed = neww - old
 let txt = `${eg}*_COMENZANDO PRUEBA DE VELOCIDAD..._*\n*_STARTING SPEED TEST..._*`.trim()
  m.reply(txt)

await m.reply('š')
await m.reply('šš')
await m.reply('ššš')
await m.reply(`ā°ā±āā± *ššššššš¼šæš | šššššš* ā±āā±ā®`)
 
let veloz = 
`š *VELOCIDAD:*\n *${speed}* *Milisegundos*\n\nš *SPEED:*\n *${speed}* *Milliseconds*`

 const templateButtonsReplyMessage = [
{index: 1, urlButton: {displayText: 'š²š°š½š°š» š³š“ šš¾šššš±š“', url: 'https://www.youtube.com/channel/UC_dDA5ENZl9_8ZhDqljLybQ'}},
{index: 2, urlButton: {displayText: 'š„³šš«š®š©šØ šš ššššššØšØš¤:', url: 'https://www.facebook.com/luisfernando.vicentehisbes.5'}},
{index: 3, quickReplyButton: {displayText: 'šššš', id: '#menu'}},
{index: 4, quickReplyButton: {displayText: 'šššššš', id: '#estado'}},
{index: 5, quickReplyButton: {displayText: 'šššš', id: '#menu'}},
]
let tm = {
text: veloz,
footer: global.wm,
templateButtons: templateButtonsReplyMessage
}
conn.sendMessage(m.chat, tm, m)
}
// let veloz = `${rg}*VELOCIDAD:* *${speed}* *Milisegundos*\n*SPEED:* *${speed}* *Milliseconds*`.trim() 
//conn.sendButton(m.chat, `${rg}*VELOCIDAD:* *${speed}* *Milisegundos*\n*SPEED:* *${speed}* *Milliseconds*`, wm, veloz, [['Vista', /${command}]], m)
                                               
//m.reply(`${rg}*VELOCIDAD:* *${speed}* *Milisegundos*\n*SPEED:* *${speed}* *Milliseconds*`)

  

handler.help = ['ping']
handler.tags = ['info']
handler.command = /^(ping|speed|velocidad|rapidez|velocity)$/i
export default handler
