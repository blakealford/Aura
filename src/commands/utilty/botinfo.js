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
      .setThumbnail('https://media.discordapp.net/attachments/680529518464598140/721143149719847054/AuraLogo.png?width=410&height=410')
      .addField('Username', `Aura#5968`, true)
      .addField('Library', `Node.js Version ${Node}`, true)
      .addField('Servers', `${guild}`, true)  
      .addField('Users', `${user} `, true)
      .addField('Website', 'https://aurbaot.xyz/', true)
      .addField('Memory Usage', ` ${usage}`, true)
      .addField('Publisher', "Aura Development", true)
      .addField('Lead Developer', "Varsp#0001", true)
      .addField('CPU', `${CPU}%`, true)
      .addField('Uptime',`${parseDur(bot.uptime)}`)
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