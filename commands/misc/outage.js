const Discord = require("discord.js");
const colours = require("../JSON/colours.json");
const client = new Discord.Client();
const config = require('../JSON/botconfig.json')
const prefix = config.prefix
module.exports = {
  name: "outage",
  category: "misc",
  description: "Reports An Outgae",
  run: async (client, message, args) => {
    const owner = (await client.fetchApplication()).owner;
    let Reason = message.content.slice(prefix.length + 22 + 7) || null;
    if (Reason == null) return message.channel.send(`Please provide a reason for this outage`);
    
    let embed = new Discord.MessageEmbed()
    .setTitle(`Outage Report`)
    .setDescription(
        `Outage Reported To **${owner.username}**`
    )
    .setColor(colours.client_white)
    .setThumbnail(message.author.displayAvatarURL())
    .addField(
        "Sender",
        message.author.tag
     )
     .addField(
        "Reason",
        `\`${reason.join(" ")}\``,
    )
    .addField(
        "Date (M/D/Y)",
        new Intl.DateTimeFormat("en-US").format(Date.now())
    ); 
    owner.send(embed);
    }}
