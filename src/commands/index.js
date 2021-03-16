

const config = require("../config.json");
const { clear } = require("./clear");
const { heySaitama } = require("./heySaitama");


const { ping } = require('./ping')

const commands = async msg => {

  const msgs = msg.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = msgs.shift().toLocaleLowerCase();

  switch (command) {
    case "amor":
      msg.reply("O Radael pediu pra te lembrar, ele te ama! :blue_heart:");
      break;

    case "radael":
      msg.reply("não fala assim com ele!");
      break;

    case "saitamaputo":
      msg.channel.send("Vai todo mundo sefudê!");
      break;

    case "saitamacareca":
      msg.reply("quem é você na fila do pão?");
      break;

    case "concordocomvc":
      msg.reply("Obrigado!");
      break;

    case "ping":
      ping(msg)
      break;

    case "clr":
      clear(msg)
      break;

    case "heysaitama":
      heySaitama(msg)
      break;
  }
}

module.exports = { commands }