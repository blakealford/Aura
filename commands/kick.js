const Discord = require('discord.js');
const moment = require("moment");
const colours = require("./colours.json");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("KICK_MEMBERS")) {
        let invalidPermissions = new Discord.MessageEmbed()
                    .setColor(colours.red_light)
                    .setTitle("You need the `Kick Members` permission to execute this command.");
                message.channel.send(invalidPermissions)
    }
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    if (!kUser) {
        let validUserKick = new Discord.MessageEmbed()
                    .setColor(colours.red_light)
                    .setTitle("Please mention a valid member");
                message.channel.send(validUserKick)
    }
    if (message.author.id === kUser.id) {
        let authorKick = new Discord.MessageEmbed()
                    .setColor(colours.red_light)
                    .setTitle("You can not kick your self");
                message.channel.send(authorKick)
    }
    if (!message.guild.me.hasPermission("KICK_MEMBERS")) {
        let invalidPermissionsBot = new Discord.MessageEmbed()
        .setColor(colours.red_light)
        .setTitle("I don't have the permission to Kick Members.");
    message.channel.send(invalidPermissionsBot)
    }
    if (kUser.hasPermission("ADMINISTRATOR")) {
        let invalidPermissionsUser = new Discord.MessageEmbed()
        .setColor(colours.red_light)
        .setTitle(`You can't kick ${kUser.username} due to Admin permission.`);
    message.channel.send(invalidPermissionsUser)
    }

    let args1 = message.content.slice(1).split(/ +/);
    let kReason = args1.slice(2).join(" ");

    if (!kReason) {
        let noReasonProvided = new Discord.MessageEmbed()
        .setColor(colours.red_light)
        .setTitle(`You can't kick ${kUser.username} due to Admin permission.`);
    message.channel.send(noReasonProvided)

    let kickEmbed = new Discord.MessageEmbed()
    .setAuthor(`Kick Moderation`, message.author.avatarURL({dynamic: true, format: 'png'}))
    .setColor(colours.green_light)
    .addField("**User**:", kUser.user.tag, true)
    .addField("**Responsible Moderator**:", message.author.username, true)
    .addField("**Command Executed In**:", message.channel, true)
    .addField("**Date**:", moment.utc(message.createdAt).format('dddd, MMMM Do YYYY'), true)
    .addField("**Reason**:", kReason)
    .setFooter('Aura Discord Bot | Developed By Void', 'https://media.discordapp.net/attachments/680529518464598140/716239917352747058/Aura-Logo-Transparent-No-Drop-Shadow.png?width=400&height=400');
    message.guild.member(kUser).kick(kReason);
    message.channel.send(kickEmbed);

}}


module.exports.config = {
    command: "kick"
}