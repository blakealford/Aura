const Discord = require('discord.js');
const dateformat = require('dateformat')
const colours = require("../JSON/colours.json");
const bot = new Discord.Client();
var prefix = "-" 
module.exports = {
  name: "report",
  category: "moderation",
  description: "Reports a user",
  run: async (bot, message, args) => {
  let User = message.mentions.users.first() || null;
  let pleaseMention = new Discord.MessageEmbed()
  .setDescription("<:AuraDown:721175040376438824> | Please mention a user ```usage | a!report [user] <reason>```")
  .setColor(colours.bot_white)
  if (User == null) {
    return message.channel.send(pleaseMention);
  } else {
    let Reason = message.content.slice(prefix.length + 22 + 7) || null;
    let reasonReport = new Discord.MessageEmbed()
    .setDescription("<:AuraDown:721175040376438824> | You need to specify a reason for the report")
    .setColor(colours.bot_white)
    if (Reason == null) {
      return message.channel.send(reasonReport);
    }
    let Avatar = User.displayAvatarURL();
    let reportChannelNotFound = new Discord.MessageEmbed()
    .setDescription("<:AuraDown:721175040376438824> | There is no channel in this server with the name please create a channel called `reports`.")
    .setColor(colours.bot_white)
    let Channel = message.guild.channels.cache.find(
      (ch) => ch.name === "reports"
    );
    if (!Channel)
    
      return message.channel.send(reportChannelNotFound);
    let Embed = new Discord.MessageEmbed()
      .setTitle(`User Report`)
      .setDescription(
        `User \`${User.tag}\` Was Reported. `
      )
      .setColor(colours.red_light)
      .setThumbnail(Avatar)
      .setDescription(`<:AuraUpvote:721174999456809023> | Successfully reported **${User.tag}**`)
      .addFields(
        { name: "Moderator", value: `${message.author.tag}`, inline: false },
        { name: "Reported User", value: `${User.tag}`, inline: false },
        { name: "Reason", value: `\`${Reason.slice(1)}\``, inline: false },
        {
          name: "Date (M/D/Y)",
          value: `${new Intl.DateTimeFormat("en-US").format(Date.now())}`,
          inline: false,
        }
      );
    Channel.send(Embed);
  }
}}
