const Discord = require('discord.js');
const dateformat = require('dateformat')
const colours = require("../JSON/colours.json");
const bot = new Discord.Client();
var prefix = "-" 
module.exports = {
  name: "poll",
  category: "fun",
  description: "Starts a poll",
  run: async (bot, message, args) => {
    let invaild = new Discord.MessageEmbed()
    .setDescription("<:AuraDown:721175040376438824> | You don't have a permissions to preform this command.")
    .setAuthor(colours.bot_white)
    if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.channel.send(invaild);
  const channel =
    message.mentions.channels.first() ||
    message.guild.channels.cache.get(args[0]);
    let invalidChannel = new Discord.MessageEmbed()
    .setDescription("<:AuraDown:721175040376438824> |  You did not mention / give the id of the channel you want the poll to be sent to.")
    .setAuthor(colours.bot_white)
    if (!channel) {
    return message.channel.send(invalidChannel);
  }
  let question = args.slice(2 == message.content).join(" ")
    .split(`poll ${channel} `)
    .join("");
    let invaildQuestion = new Discord.MessageEmbed()
    .setDescription("<:AuraDown:721175040376438824> | You need to specify your question.")
    .setAuthor(colours.bot_white)
  if (!question)
    return message.channel.send(invaildQuestion);
  const Embed = new Discord.MessageEmbed()
    .setTitle(`New Poll By: ${message.author.username}`)
    .setDescription(`${question}`)
    .setFooter('©AuraDevelopmet 2020 All Rights Reserved')
    .setColor(colours.bot_white);
  let msg = await bot.channels.cache.get(channel.id).send(Embed);
  await msg.react("👍");
  await msg.react("👎");
}}
