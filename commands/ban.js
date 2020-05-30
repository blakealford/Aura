const Discord = require('discord.js');
const moment = require("moment");
const colours = require("./colours.json");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("BAN_MEMBERS", "ADMINISTRATOR")){
        const userPerms = new Discord.MessageEmbed()
            .setColor(colours.red_light)
            .setTitle("You need `Ban Members` permission to execute this command");
    message.channel.send(userPerms)
    return
    }
    const bReason = args.slice(2).join(" ");
    const bUser = message.mentions.members.first() || message.guild.members.resolve(args[0]);
      
    if (!bUser) {
        const invalidUser = new Discord.MessageEmbed()
            .setColor(colours.red_light)
            .setTitle("Please mention a valid user.");
    message.channel.send(invlidUser)
    return
    }
    if (message.author.id === bUser.id){
        const bYourSelf = new Discord.MessageEmbed()
            .setColor(colours.red_light)
            .setTitle("You cannot ban yourself.");
    message.channel.send(bYourSelf)
    return
    }
    if (!message.guild.me.hasPermission("BAN_MEMBERS")){
        const invalidPerms = new Discord.MessageEmbed()
            .setColor(colours.red_light)
            .setTitle("I don't have the `Ban Members` permission to ban a member.");
    message.channel.send(invalidPerms)
    return
    }
    if (bUser.hasPermission("ADMINISTRATOR")){
        const adminPerms = new Discord.MessageEmbed()
            .setColor(colours.red_light)
            .setTitle(`You can't ban ${bUser.username} due to Admin permission.`);
    message.channel.send(adminPerms)
    return
    }
    if (!bReason){
        const Reason = new Discord.MessageEmbed()
            .setColor(colours.red_light)
            .setTitle("Please provide a reason.");
    message.channel.send(Reason)
    return
    }
    const banEmbed = new Discord.MessageEmbed()
        .setAuthor(`Ban Moderation`, message.author.displayAvatarURL({
            dynamic: true,
            format: 'png'
        }))
        .setColor(colours.green_light)
        .addField("**User**:", bUser.user.tag)
        .addField("**Responsible Moderator**:", message.author.username)
        .addField("**Command Executed In**:", message.channel)
        .addField("**Date**:", moment.utc(message.createdAt).format('dddd, MMMM Do YYYY'))
        .addField("**Reason**:", bReason)
        .setFooter('Aura Discord Bot | Developed By Void', 'https://media.discordapp.net/attachments/680529518464598140/716239917352747058/Aura-Logo-Transparent-No-Drop-Shadow.png?width=400&height=400');

    message.guild.members.cache.bUser.ban(bReason);
    message.channel.send(banEmbed);
}
module.exports.config = {
    command: "ban"
}