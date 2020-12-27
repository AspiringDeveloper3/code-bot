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

const jsFib = `
//number of terms
const number = parseInt(prompt('Enter the number of terms: '));

//1st and 2nd terms
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

//loop for the sequence
for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}`;

const srvPrefix = "$";

client.on("message", (msg) => {
  if (!msg.content.startsWith(srvPrefix) || message.author.bot) return;

const args = message.content.slice(srvPrefix.length).trim().split(' ');
const command = args.shift().toLowerCase();
// the rest of your code
  if (msg.content == "%solve fib py") msg.reply(pyFib);
  else if (msg.content == "%solve fib js") msg.reply(jsFib);

  // server roles
  else if (msg.content == "mod"){
    let taggedUser = msg.mentions.users.first()
    msg.channel.send(`You want to mod ${taggedUser.username}`)
  };
  if (msg.content == "thanks bot!" || msg.content == "thanks bot")
    msg.react("❤");
});

//Functions
const modUser = (member) => member.roles.add("791179874974564392");

client.login(process.env.BOT_TOKEN);
