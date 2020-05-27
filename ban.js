const Discord = require('discord.js')
const moment = require("moment")

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) {
        return message.channel.send("You need `Ban Members` permission to execute this command")
    }
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    if (!bUser) {
        return message.channel.send("Please mention a valid user.")
    }
    if (message.author.id === bUser.id) {
        return message.channel.send("You cannot ban yourself.")
    }
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
        return message.channel.send("I don't have the `Ban Members` permission to ban a member.")
    }
    if (bUser.hasPermission("ADMINISTRATOR")) {
        return message.channel.send(`You can't ban ${bUser.username} due to Admin permission.`)
    }
    
    let args1 = message.content.slice(1).split(/ +/);
    let bReason = args1.slice(2).join(" ");
    
    if (!bReason) {
        return message.channel.send("Please provide a reason.")
    }
    
    let banEmbed = new Discord.MessageEmbed()
        .setAuthor(`Ban Moderation`, message.author.avatarURL({ dynamic: true, format: 'png' }))
        .setColor('0xFF0000')
        .addField("**User**:", bUser.user.tag)
        .addField("**Responsible Moderator**:", message.author.username)
        .addField("**Command Executed In**:", message.channel)
        .addField("**Date**:", moment.utc(message.createdAt).format('dddd, MMMM Do YYYY'))
        .addField("**Reason**:", bReason);
    
            message.guild.member(bUser).ban(bReason); 
            message.channel.send(banEmbed);
    }


    module.exports.config = {
        command: "ban"
    }