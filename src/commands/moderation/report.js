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
    if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.channel.send(`No.`);
  let User = message.mentions.users.first() || null;

  if (User == null) {
    return message.channel.send(`:x: You need to mention a user`);
  } else {
    let Reason = message.content.slice(prefix.length + 22 + 7) || null;
    if (Reason == null) {
      return message.channel.send(
        `:x: You need to specify a reason for the report`
      );
    }
    let Avatar = User.displayAvatarURL();
    let Channel = message.guild.channels.cache.find(
      (ch) => ch.name === "reports"
    );
    if (!Channel)
      return message.channel.send(
        `There is no channel in this server with the name please create a channel called \`reports\``
      );
    let Embed = new Discord.MessageEmbed()
      .setTitle(`User Report`)
      .setDescription(
        `User \`${User.tag}\` Was Reported. `
      )
      .setColor(colours.red_light)
      .setThumbnail(Avatar)
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
