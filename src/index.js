const Discord = require("discord.js");
const colours = require("./JSON/colours.json");
const bot = new Discord.Client();
const config = require("./JSON/botconfig.json")
const prefix = config.prefix;
const token = config.token;
var fs = require("fs");
var path = require("path");
var colourBlue = "0x173f5f";
//Files
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.catergories = fs.readdirSync("./commands/");
["command"].forEach(handler=>{
  require(`./handlers/${handler}`)(bot);
});

fs.readdir("./commands/", (err, files) => {
  if (err) conosle.error(err);

  var jsfiles = files.filter((f) => f.split(".").pop() === "js");
  if (jsfiles.length <= 0) {
    return console.log("No commands found...");
  } else {
    console.log(jsfiles.length + " commands found");
  }

  jsfiles.forEach((f, i) => {
    var cmds = require(`./commands/${f}`);
    console.log * `Command ${f} loading...`;
    bot.commands.set(cmds.config.command, cmds);
  });
});


bot.on("ready", () => {
  console.log(`Aura Bot Is Online Serving ${bot.guilds.cache.size} Servers --- Runing Version ` + version);
  bot.user.setStatus("dnd");
  bot.user.setActivity(`-help || aurabot.xyz `, {    //${bot.guilds.cache.size} servers | -help  (show servers)
    type: "WATCHING",
  });
});

bot.on("message", async message => {
  if(message.authot.bot) return;
  if(!message.content.startsWith(prefix)) return;
  if(!message.guild) return;
  if(!mesasege.member) message.member = await message.guild.fetchMember(message);
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if(cmd.length == 0 ) return;
  const command = bot.commands.ger(cmd)
  if(!command) command = bot.commands.get(bot.aliases.get(cmd));
  if(command) command.run(bot,message,args)
});
bot.login(token);

/* Command handler

const Discord = require("discord.js");
const colours = require("../src/JSON/colours.json");
const bot = new Discord.Client();
module.exports = {
  name: "file name",
  category: "folder name",
  description: "Some description here",
  run: async (bot, message, args) => {
 //code here  


}}

*/