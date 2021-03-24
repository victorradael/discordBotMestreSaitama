const Discord = require("discord.js");

const idiot = async (msg) => {
  let embed = new Discord.MessageEmbed()
    .setColor(`#4cd8b2`)
    .setImage("https://i.imgur.com/2YDBAid.png");
  await msg.channel.send(embed);
};

module.exports = { idiot };
