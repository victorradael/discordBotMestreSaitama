const saitamaSpeeches = msg => {
  const defaultMsg = msg.content.toLowerCase().split(" ");

  defaultMsg.find((el) => {
    switch (el) {
      case "careca":
        return msg.reply("tá falando de mim!?");
        break;
      case "comer":
      case "comida":
        return msg.reply("acho bom eu ser convidado!!");
        break;
      case "tornado":
        return msg.reply("porquê está falando dessa pirralha?");
        break;
      case "radael":
      case "victor":
      case "gabriel":
      case "alves":
        return msg.reply("não chama ele assim! Pra você ele é Amorzinho!");
        break;
      case "carol":
      case "carolina":
      case "maria":
        return msg.reply("não chama ela assim! Pra você ela é Amorzinho!");
        break;

    }

    if (msg.content === 'boa noite' || msg.content === 'bom dia' || msg.content === 'boa tarde') {
      return msg.reply(`${msg.content} pra você também!`)
    }
  });
}

module.exports = { saitamaSpeeches }