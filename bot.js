require("dotenv").config();

const discord = require("discord.js");

const client = new discord.Client({
  partials: ["MESSAGE"],
});

client.on("ready", () => console.log("Bot ready !"));

client.on("message", (msg) => {
  if (
    msg.content.toLowerCase() === "yo" ||
    msg.content.toLowerCase() === "hello"
  ) {
    msg.reply("Hey! Wassup?");
  }
  if (msg.content.toLowerCase() === "what u doing?") {
    msg.reply("Coding! and Studying, duh");
  } 
});

client.login(process.env.BOT_TOKEN);
