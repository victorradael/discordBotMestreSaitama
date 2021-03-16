const Discord = require('discord.js')

const heySaitama = async msg => {
  const images = [
    "https://i.imgur.com/o3PngJZ.png",
    "https://i.imgur.com/2YDBAid.png",
    "https://i.imgur.com/AuuaUy7.png",
    "https://i.imgur.com/Xonx8xe.png"
  ]
  let number = parseInt(Math.random() * (5 - 1) + 1)
  let avatar = images[number - 1]
  let embed = new Discord.MessageEmbed()
    .setColor(`#4cd8b2`)
    .setImage(avatar)
  await msg.channel.send(embed);
}

module.exports = { heySaitama }