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
  } else {
    for (var i = 0; i < forbidenWords.length; i++) {
      if (msg.content.includes(forbidenWords[i])) {
        msg.delete({
          timeout: 20,
          reason: "Bad Word",
        });
        msg.reply("Hey! That word isn't allowed here 😡");
      }
    }
  }
});

client.login(process.env.BOT_TOKEN);
