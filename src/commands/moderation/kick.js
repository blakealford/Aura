const Discord = require('discord.js');
const moment = require("moment");
const colours = require("../src/JSON/colours.json");
const bot = new Discord.Client();
module.exports = {
  name: "kick",
  category: "moderation",
  description: "Kicks a user",
  run: async (bot, message, args) => {
    if (!message.member.hasPermission("KICK_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":x: You don't have a permissions to preform this command.");
    let user = message.mentions.users.first();
    
    let member = message.guild.member(user);
    let reason = args.slice(1).join(" ");
    
    if (!user) return message.channel.send(":x: Please mention the user, example --> `-kick [user] <reason>`.");
    if (user.id === message.author.id) return message.channel.send(":x: You can't kick yourself.");
    if (user.id === bot.user.id) return message.channel.send(":x: You can't kick me.");
    
    if (!reason) reason = "No reason provided";
    
    member.kick(reason).then(() => {
      message.channel.send(`:white_check_mark: Successfully kicked **${user.tag}**`);
    }).catch(err => {
      message.reply(":x: I was unable to kick the member.");
    })  
}}
