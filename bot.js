require("dotenv").config();

const discord = require("discord.js");

const client = new discord.Client({
  partials: ["MESSAGE"],
});

client.on("ready", () => console.log("Bot ready !"));

client.on("message", (msg) => {
  if (msg.content.toLowerCase === "yo" || msg.content.toLowerCase === "hello") {
    msg.reply("Hey! Wassup?");
  }
  if (msg.content === "What u doing?") {
    msg.reply("Coding! and Studying, duh");
  }
  if (msg.content.startsWith === "Hello" || msg.content.startsWith === "Yo!") {
    msg.channel.send("Hello!");
  }
});

//Functions
const modUser = (member) => member.roles.add("791179874974564392");
const unmodUser = (member) => member.roles.remove("791179874974564392");

client.login(process.env.BOT_TOKEN);
