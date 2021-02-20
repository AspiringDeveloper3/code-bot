require("dotenv").config();

const discord = require("discord.js");

const forbidenWords = [
  "fuck",
  "fk",
  "shit",
  "fek",
  "bitch",
  "fucker",
  "asshole",
];

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
  for (var i = 0; i < forbidenWords.length; i++) {
    if (msg.content.includes(forbidenWords[i])) {
      msg.reply("Hey! That word isnt allowed here! 😡").then((msg) => {
        msg.delete({ timeout: 200 }).catch((err) => console.log(err));
      });
    }
  }
});

client.login(process.env.BOT_TOKEN);
