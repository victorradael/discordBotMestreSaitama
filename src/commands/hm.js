const Discord = require("discord.js");

const hm = async (msg) => {
  const images = [, , "https://i.imgur.com/Xonx8xe.png"];

  let embed = new Discord.MessageEmbed()
    .setColor(`#4cd8b2`)
    .setImage("https://i.imgur.com/AuuaUy7.png");
  await msg.channel.send(embed);
};

module.exports = { hm };
