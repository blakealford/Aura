const Discord = require('discord.js');
const dateformat = require('dateformat')
const colours = require("../JSON/colours.json");
const client = new Discord.Client();
var prefix = "-" 
module.exports = {
  name: "report",
  category: "moderation",
  description: "Reports a user",
  run: async (client, message, args) => {
  let User = message.mentions.users.first() || null;
  let pleaseMention = new Discord.MessageEmbed()
  .setDescription("<:AuraError:729237692054896721>  | Please mention a user ```usage | a!report [user] <reason>```")
  .setColor(colours.client_white)
  if (User == null) {
    return message.channel.send(pleaseMention);
  } else {
    let Reason = message.content.slice(prefix.length + 22 + 7) || null;
    let reasonReport = new Discord.MessageEmbed()
    .setDescription("<:AuraError:729237692054896721>  | You need to specify a reason for the report")
    .setColor(colours.client_white)
    if (Reason == null) {
      return message.channel.send(reasonReport);
    }
    let Avatar = User.displayAvatarURL({ dynamic: true, size: 512 });
    let reportChannelNotFound = new Discord.MessageEmbed()
    .setDescription("<:AuraError:729237692054896721>  | There is no channel in this server with the name please create a channel called `reports`.")
    .setColor(colours.client_white)
    let Channel = message.guild.channels.cache.find(
      (ch) => ch.name === "reports"
    );
    if (!Channel)
    return message.channel.send(reportChannelNotFound);
      
      let userReported = new Discord.MessageEmbed()
      .setAuthor(`${User.tag} Report`, Avatar)
      .addField(`Message From Staff`, `__**Staff Have Recieved The Report**__\n> **${User}** was reported, thank you for making the server a better place`)
      .addField(`Reason`, `\`\`\`${Reason.slice(2)}\`\`\``)
      .setFooter(`${User.tag} -- ID ${User.id}`)
      .setColor('RANDOM')
      let Embed = new Discord.MessageEmbed()
      .setTitle(`User Report`)
      .setDescription(
        `User \`${User.tag}\` Was Reported. `
      )
      .setColor(colours.client_white)
      .setThumbnail(Avatar)
      .setDescription(`Successfully reported **${User}**`)
      .setFooter(`Reported User ID - ${User.id}`, Avatar)
      .addFields(
        { name: "Moderator", value: `${message.author} \n> Tag ${message.author.tag}`, inline: false },
        { name: "Reported User", value: ` ${User} \n> Tag ${User.tag}`, inline: false },
        { name: "Reason", value: `\`${Reason.slice(2)}\``, inline: false },
        {
          name: "Date (M/D/Y)",
          value: `> ${new Intl.DateTimeFormat("en-US").format(Date.now())}`,
          inline: false,
        }
      );
    Channel.send(Embed)
    message.channel.send(userReported)
  }
}}
