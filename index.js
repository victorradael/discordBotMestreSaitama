require("dotenv/config");
const Discord = require("discord.js");

const bot = new Discord.Client();

const token = process.env.BOT_TOKEN;

//heroku
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;

express()
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .get("/", (request, response) => response.render("pages/index"))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

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
