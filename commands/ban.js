const Discord = require('discord.js');
const moment = require("moment");
const colours = require("./colours.json");
const bot = new Discord.Client();

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("BAN_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":x: You need the `Ban Members` permission to preform this command")
  let user = message.mentions.users.first();

  let member = message.guild.member(user);
  let reason = args.slice(1).join(" ");

  if (!user) return message.channel.send(":x: Please mention a user");
  if (user.id === message.author.id) return message.channel.send(":x: You cant ban yourself");
  if (user.id === bot.user.id) return message.channel.send(":x: You cant ban me");

  if (!reason) reason = "No reason provided";

  member.ban(reason).then(() => {  
  const ban = new Discord.MessageEmbed()
  .setTitle("Ban Moderation")
  .setDescription(`:white_check_mark: You have Banned the user${User.id} from this server`)
  .setColour(colours.bot_white);
  message.channel.send(ban)
  }).catch(err => {
    message.reply("I was unable to ban the member, please try again");

  })

}

module.exports.config = {
    command: "ban"
}