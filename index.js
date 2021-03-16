require("dotenv/config");
const Discord = require("discord.js");

const config = require("./config.json");

const bot = new Discord.Client();

const token = process.env.BOT_TOKEN;

//heroku
const express = require("express");
const path = require("path");
const { DH_NOT_SUITABLE_GENERATOR } = require("constants");
const PORT = process.env.PORT || 5000;

express()
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .get("/", (request, response) => response.render("pages/index"))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

bot.login(token);

bot.on("ready", () => {
  bot.user.setActivity("chinelo no pernilongo!");
  console.log("Mestre Saitama Online!");
});

bot.on("message", (msg) => {
  if (msg.author.bot) return;
  // if (msg.content.indexOf(config.prefix) !== 0) return;

  const defaultMsg = msg.content.toLowerCase().split(" ");
  console.log(defaultMsg);
  defaultMsg.find((el) => {
    if (el === "careca") {
      return msg.replay("tá falando de mim!?");
    }
  });

  const msgs = msg.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = msgs.shift().toLocaleLowerCase();

  if (command === "amor") {
  }

  switch (command) {
    case "amor":
      msg.reply("Oi! Tá gostando?");
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
  }
});
