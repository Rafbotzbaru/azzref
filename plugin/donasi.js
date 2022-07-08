let handler = async m => m.reply(`
            .✵.Donasi.✵.

  DANA & PULSA : 085646606905

  GRUP BOTZ TERGG :
  😈₲ⱤɄ₱ ฿Ø₮Ⱬ ꋬꇙꌦꋪꋬꊰ 6ꌦꄲ꒤꒤¹😈

GROUP 1:
https://chat.whatsapp.com/CRrj0z3HgeX39XHNUt0M9V
GROUP 2:
https://chat.whatsapp.com/Da7ZPf7mC8T3nERBpWPcgt
GROUP 3:
https://chat.whatsapp.com/BdwNQqYBwDN5UtvievnDEe

`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
