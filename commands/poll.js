const Discord = require('discord.js');
const dateformat = require('dateformat')
const colours = require("./colours.json");
const bot = new Discord.Client();
var prefix = "-" 

module.exports.run = async (bot, message, args) => {
    if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.channel.send(
      `:x: You don't have a permissions to preform this command.`
    );
  const channel =
    message.mentions.channels.first() ||
    message.guild.channels.cache.get(args[0]);
  if (!channel) {
    return message.channel.send(
      `:x: You did not mention / give the id of the channel you want the poll to be sent to.`
    );
  }
  let question = message.content
    .split(`poll ${channel} `)
    .join("");
  if (!question)
    return message.channel.send(`:x: You need to specify your question!`);
  const Embed = new Discord.MessageEmbed()
    .setTitle(`New Poll By: ${message.author.username}`)
    .setDescription(`${question}`)
    .setFooter('Aura Discord Bot | Developed By Void')
    .setColor(colours.bot_white);
  let msg = await bot.channels.cache.get(channel.id).send(Embed);
  await msg.react("👍");
  await msg.react("👎");
},
module.exports.config = {
    command: "poll"
}