const config = require("../config.json");
const { clear } = require("./clear");
const { superSaitama } = require("./super");
const { idiot } = require("./idiot");
const { messageRemove } = require("./messageDelete");
const { hm } = require("./hm");

const { ping } = require("./ping");
const { out } = require("./out");

const commands = async (msg) => {
  if (msg.content.indexOf(config.prefix) !== 0) return;

  const msgs = msg.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = msgs.shift().toLocaleLowerCase();

  switch (command) {
    case "amor":
      msg.reply("O Radael pediu pra te lembrar, ele te ama! :blue_heart:");
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
      ping(msg);
      break;

    case "clr":
      clear(msg);
      break;

    case "rm":
      messageRemove(msg);
      break;

    case "super":
      superSaitama(msg);
      break;

    case "idiot":
      idiot(msg);
      break;

    case "hm":
      hm(msg);
      break;

    case "out":
      out(msg);
      break;
  }
};

module.exports = { commands };
