require("dotenv/config");

const express = require("express");
const path = require("path");
const Discord = require("discord.js");
const { saitamaSpeeches } = require("./saitama/speeches");
const { commands } = require("./commands");

const bot = new Discord.Client();
const token = process.env.BOT_TOKEN;
const PORT = process.env.PORT || 5000;

express()
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .get("/", (request, response) => response.render("pages/index"))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

bot.on("ready", () => {
  bot.user.setActivity("chinelo no pernilongo!");
  console.log("Mestre Saitama Online!");
});

bot.on("message", (msg) => {
  saitamaSpeeches(msg)
  commands(msg)
});

bot.login(token);

module.exports = { bot }
