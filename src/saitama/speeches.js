const saitamaSpeeches = msg => {
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
      case "tornado":
        msg.reply("porquê está falando dessa pirralha?");
        break;
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
  });
}

module.exports = { saitamaSpeeches }