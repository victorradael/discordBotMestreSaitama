const saitamaSpeeches = msg => {
  if (msg.author.bot) return;
  const defaultMsg = msg.content.toLowerCase().split(" ");

  defaultMsg.find((el) => {
    switch (el) {
      case "careca":
        msg.reply("tá falando de mim!?");
        break;
      case "comer":
      case "comida":
        msg.reply("acho bom eu ser convidado!!");
        break;
      case "mercado":
      case "mercadinho":
      case "promoção":
        msg.channel.send('AAAAAAAAAAAAAAAH, eu esqueci, hoje é dia de promoção no mercadinho!')
        break;
    }

    if (msg.guild.name === "QuintaDimensão!") {
      switch (el) {
        case "radael":
        case "victor":
        case "gabriel":
        case "alves":
          msg.reply("não chama ele assim! Pra você ele é Amorzinho!");
          break;
        case "carol":
        case "carolina":
        case "maria":
          msg.reply("não chama ela assim! Pra você ela é Amorzinho!");
          break;
      }
    }

    if (msg.content === 'boa noite' || msg.content === 'bom dia' || msg.content === 'boa tarde') {
      return msg.reply(`${msg.content} pra você também!`)
    }
  });
}

module.exports = { saitamaSpeeches }