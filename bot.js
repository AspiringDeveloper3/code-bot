require("dotenv").config();

const discord = require("discord.js");

const client = new discord.Client({
  partials: ["MESSAGE"],
});

client.on("ready", () => console.log("Bot ready !"));

const pyFib = `
#This is the program for fibonacci sequence in python

#the number of terms
nterms = int(input("How many terms? "))

# first two terms
n1, n2 = 0, 1

count = 0

# check if the number of terms is valid

if nterms <= 0:
print("Please enter a positive integer")

elif nterms == 1:
print("Fibonacci sequence upto",nterms,":")
print(n1)

else:
print("Fibonacci sequence:")
while count < nterms:
   print(n1)
   nth = n1 + n2
   # update values
   n1 = n2
   n2 = nth
   count += 1`;

client.on("message", (msg) => {
  if (msg.content == "%solve fib py") msg.reply(pyFib);
  else if (msg.content == "$mod me") modUser(msg.member);
  if (msg.content == "thanks bot!" || msg.content == "thanks bot")
    msg.react("❤");
});

//Functions
const modUser = (member) => member.roles.add("791179874974564392");

client.login(process.env.BOT_TOKEN);
