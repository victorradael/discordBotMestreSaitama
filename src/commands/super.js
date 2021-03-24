const Discord = require("discord.js");

const superSaitama = async (msg) => {
  let embed = new Discord.MessageEmbed()
    .setColor(`#4cd8b2`)
    .setImage("https://i.imgur.com/o3PngJZ.png");
  await msg.channel.send(embed);
};

module.exports = { superSaitama };
