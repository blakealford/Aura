const Discord = require('discord.js');
const dateformat = require('dateformat')
const colours = require("../src/JSON/colours.json");
const bot = new Discord.Client();
var prefix = "-" 

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANGE_MESSAGES") || !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":x: You don't have a permissions to preform this command.");
    let rChannel = message.guild.channels.cache.get(args[0]);
    if (!rChannel)
      return message.channel.send(
        `:x: You did not specify your channel to send the announcement too!`
      );
    console.log(rChannel);
    let MSG = message.content
      .split(`${bot.prefix}announce ${rChannel.id} `)
      .join("");
    if (!MSG)
      return message.channel.send(`:x: You did not specify your message to send!`);
    const _ = new Discord.MessageEmbed()
      .setTitle(`New Announcment`)
      .setDescription(`${MSG}`)
      .setFooter('Aura Discord Bot | Developed By Void')
      .setColor(colours.bot_white);
    rChannel.send(_);
    message.delete();
    };
module.exports.config = {
    command: "announce"
}