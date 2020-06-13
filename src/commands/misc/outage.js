const Discord = require("discord.js");
const colours = require("../JSON/colours.json");
const bot = new Discord.Client();
const config = require('../JSON/botconfig.json')
module.exports = {
  name: "outage",
  category: "misc",
  description: "Reports An Outgae",
  run: async (bot, message, args) => {
    if (!reason[0]) {
        return message.channel.send(
            `Please state a reson for reporting this outage`
        );
    }
    const owner = (await bot.fetchApplication()).owner;
    let embed = new Discord.MessageEmbed()
        .setTitle(`Outage Report`)
        .setDescription(
            `Outage Reported To **${owner.username}**`
        )
        .setColor(colours.bot_white)
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
