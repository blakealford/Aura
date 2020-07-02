const Discord = require("discord.js");
const moment = require("moment");
const colours = require("../JSON/colours.json");
let m = require('moment-duration-format'),
    os = require('os');
    cpuStat = require('cpu-stat');
    ms = require('ms')
  module.exports = {
  name: "botinfo",
  category: "utilty",
  description: "Sends bots info",
  run: async (bot, message, args) => {
    let user = message.mentions.users.first() || message.author;
    cpuStat.usagePercent(function (error, percent, seconds) {
      if (error) {
        return console.error(error)
      }
      
      const cores = os.cpus().length
      const cpuModel = os.cpus()[0].model 
      const guild = bot.guilds.cache.size.toLocaleString()
      const user = bot.users.cache.size.toLocaleString() 
      const channel = bot.channels.cache.size.toLocaleString() 
      const usage = formatBytes(process.memoryUsage().heapUsed) 
      const Node = process.version 
      const CPU = percent.toFixed(2) 
      
      const botStatsMsg = new Discord.MessageEmbed() 
      .setTitle("Bot Information")
      .setThumbnail('https://media.discordapp.net/attachments/716540407982325770/728081390175911996/Aura-Free.png?width=360&height=360')
      .setDescription('You currently have the `Free` Version of Aura.\nIf you would like to implement Aura or Aura Premium into your own server, you can do so [here](https://aurabot.xyz)!\n\n Want to get the most out of Aura? Join our Premium program [here](https://google.com)')
      .addField('<:Server:728110918453559349> Total Guilds', `${guild}`, true)
      .addField('<:Scale:728113829837537320> Total Users',  `${user}`, true)  
      .addField('<:CPU:728113829761777755> CPU Usage', `${CPU}%`, true)
      .addField('<:RAM:728113829921423480> Memory Usage', `${usage}`, true)
      .addField('<:Update:728113829883543632> Node JS Version', `${Node}`, true)
      .addField('<:Website:728113830005309500> Website', 'https://aurabot.xyz/', true)
      .addField('<:Developer:728113829707513916> Lead Developer', `Zylo#0001`, true)
      .addField('<:Up:728113829875154964> Uptime',`${parseDur(bot.uptime)}`)
      .setColor(colours.bot_white)
      message.channel.send(botStatsMsg)
});
module.exports.config = {
  command: "botstats",
}
function formatBytes (a, b) {
  if (0 == a) return "0 Bytes";
  let c = 1024,
      d = b || 2,
      e = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
      f = Math.floor(Math.log(a) / Math.log(c));
  
  return parseFloat((a / Math.pow(c, f)).toFixed(d)) + " " + e[f]
} 

function parseDur(ms) {
  let seconds = ms / 1000,
      days = parseInt(seconds / 86400);
  seconds = seconds % 86400
  
  let hours = parseInt(seconds / 3600);
  seconds = seconds % 3600
  
  let minutes = parseInt(seconds / 60);
  seconds = parseInt(seconds % 60)
  
  if (days) {
    return `${days} day, ${hours} hours, ${minutes} minutes`
  } else if (hours) {
    return `${hours} hours, ${minutes} minutes, ${seconds} seconds`
  } else if (minutes) {
    return `${minutes} minutes, ${seconds} seconds`
  }
  
  return `${seconds} second(s)`
}}}



// `Server: ${guild} \nUser: ${user} \nChannel: ${channel} \nUsage: ${usage} \nNode: ${Node} \nCPU Usage: ${CPU}%`)  