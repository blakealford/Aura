const Discord = require('discord.js');
const moment = require("moment");
const colours = require("../JSON/colours.json");
const bot = new Discord.Client();
module.exports = {
  name: "ban",
  category: "moderation",
  description: "Bans a member",
  run: async (bot, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<:AuraDown:721175040376438824> | You don't have a permissions to preform this command.");
    let user = message.mentions.users.first();
    
    let member = message.guild.member(user);
    let reason = args.slice(1).join(" ");
    
    if (!user) return message.channel.send("<:AuraDown:721175040376438824> | Please mention the user, example --> `-ban [user] <reason>`.");
    if (user.id === message.author.id) return message.channel.send("<:AuraDown:721175040376438824> | You can't ban yourself.");
    if (user.id === bot.user.id) return message.channel.send("<:AuraDown:721175040376438824> | You can't ban me.");
    
    if (!reason) reason = "No reason provided";
    
    member.ban(reason).then(() => {
      message.channel.send("<:AuraUpvote:721174999456809023> | Successfully banned **${user.tag}**");
    }).catch(err => {
      message.reply("<:AuraDown:721175040376438824> | I was unable to banned the member.");
    })
}}

