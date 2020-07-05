const Discord = require('discord.js');
const dateformat = require('dateformat')
const colours = require("../JSON/colours.json");
const client = new Discord.Client();
var prefix = "-" 
module.exports = {
  name: "announce",
  category: "utilty",
  description: "Sends an embed message with a users requested message",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANGE_MESSAGES") || !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":x: You don't have a permissions to preform this command.");
    let rChannel = message.guild.channels.cache.get(args[0]);
    if (!rChannel)
      return message.channel.send(
        `:x: You did not specify your channel to send the announcement too!`
      );
    console.log(rChannel);
    let MSG = message.content
      .split(`${client.prefix}announce ${rChannel.id} `)
      .join("");
    if (!MSG)
      return message.channel.send(`:x: You did not specify your message to send!`);
    const _ = new Discord.MessageEmbed()
      .setTitle(`New Announcment`)
      .setDescription(`${MSG}`)
      .setFooter('Aura Discord client | Developed By Void')
      .setColor(colours.client_white);
    rChannel.send(_);
    message.delete();
}}