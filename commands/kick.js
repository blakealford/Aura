const Discord = require('discord.js')
const moment = require("monent")

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("KICK_MEMBERS")) {
        return message.channel.send("You need the `Kick Members` permission to execute this command.")
    }
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    if (!kUser) {
        return message.channel.send("Please mention a valid user.")
    }
    if (message.author.id === kUser.id) {
        return message.channel.send("You cannot kick yourself.")
    }
    if (!message.guild.me.hasPermission("KICK_MEMBERS")) {
        return message.channel.send("I don't have the permission to Kick Members.")
    }
    if (kUser.hasPermission("ADMINISTRATOR")) {
        return message.channel.send(`You can't kick ${kUser.username} due to Admin permission.`)
    }

    let args1 = message.content.slice(1).split(/ +/);
    let kReason = args1.slice(2).join(" ");

    if (!kReason) {
        const embed = new Discord.MessageEmbed()
        return message.channel.send("Please provide a reason.")
    }
    let kickEmbed = new Discord.MessageEmbed()
    .setAuthor(`Kick Moderation`, message.author.avatarURL({dynamic: true, format: 'png'}))
    .setColor('RANDOM')
    .addField("**User**:", kUser.user.tag, true)
    .addField("**Responsible Moderator**:", message.author.username, true)
    .addField("**Command Executed In**:", message.channel, true)
    .addField("**Date**:", moment.utc(message.createdAt).format('dddd, MMMM Do YYYY'), true)
    .addField("**Reason**:", kReason);
    message.guild.member(kUser).kick(kReason);
    message.channel.send(kickEmbed);

}


module.exports.config = {
    command: "kick"
}