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

const help = `Hola Amigos! I am "helping amigo", and am like the serve-r for this server
I have many command like :-
  => "$help" - to get all the commands
  => "= solve" - prefix for calculation of common problems in various langs
  => "$" - prefix for server management, i.e. roles and appearance
  => "$bot help" - to get this msg for a brief explanation
  
  P.S. This bot is still in development, pls contribute with code through this github repository
  --https://github.com/AspiringDeveloper3/code-bot 😊`;

const commands = `There are various commands for this bot :-
  1) = solve <problem> <lang>, i.e. = solve fib (fibonacci) js (the language)
  2) $ <server role> me, i.e. $ mod (adds mod role) me
  3) "help" / "bot help" for commands and help
  
  P.S. This bot is in development, so plz consider contributing to this repository
  --https://github.com/AspiringDeveloper3/code-bot 😊`

client.on("message", (msg) => {
  if (msg.content == "=solve fib py" || msg.content == "= solve fib py")
    msg.reply(pyFib);
  if (msg.content == "$mod me") modUser(msg.member);
  if (msg.content == "thanks bot!" || msg.content == "thanks bot")
    msg.react("❤");
  if (msg.content == "=solve fib js" || msg.content == "= solve fib js")
    msg.reply(jsFib);
  if (msg.content == "$unmod me") unmodUser(msg.member);
  if (msg.content == "$bot help") msg.reply(commands);

  if (msg.content == "$help") msg.reply(help)
});

//Functions
const modUser = (member) => member.roles.add("791179874974564392");
const unmodUser = (member) => member.roles.remove("791179874974564392");

client.login(process.env.BOT_TOKEN);
