require("dotenv/config");
const Discord = require("discord.js");

const bot = new Discord.Client();

const token = process.env.BOT_TOKEN;

bot.login(token);
bot.on("ready", () => {
  console.log("Mestre Saitama Online!");
});

bot.on("message", (msg) => {
  const msgPattern = msg.content.toLowerCase();
  if (msgPattern === "amor") {
    msg.reply("Oi Gata!");
  }
});
