const Discord = require("discord.js");

const out = async (msg) => {
  let embed = new Discord.MessageEmbed()
    .setColor(`#4cd8b2`)
    .setImage("https://i.imgur.com/Xonx8xe.png");
  await msg.channel.send(embed);
};

module.exports = { out };
