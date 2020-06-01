const Discord = require('discord.js');
const colours = require("./colours.json");
const bot = new Discord.Client();
const ms = require('ms');

bot.mute = new Map();


module.exports.run = async (bot, message, args) => {     
    if (!message.member.hasPermission("MANAGE_MESSAGES") || !message.member.hasPermission("MUTE_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) {
        return message.channel.send("You dont have the correct permissions to preform this command, `Manage Messages or Mute Members`");
    }
    const cmd = message.content.split(" ");
    const user = message.mentions.members.first() || message.guild.members.cache.get(cmd[1]);
    if (!user) return message.channel.send(":x: You need to mention a user");
    if (user.user.id === bot.user.id) return message.channel.send(":x: You can't mute me");
    console.log((user.user.id === bot.user.id))
    if (user.user.id === message.author.id) return message.channel.send(":x: You can't mute yourself");
    let role = message.guild.roles.cache.find(r => r.name === "Muted");
    let client = message.guild.members.cache.get(bot.user.id).roles.highest;

    if (!role) return message.channel.send(":x: Couldn't find the mute role");
    if (!role.position > client.position) return message.channel.send(":x: The role is higher then me");

    let time = args[1];

    if (!time) {
        if (!user.roles.cache.has(role.id)) return message.channel.send(":x: This user is still muted");
        await (user.roles.add(role.id).catch(err => message.channel.send(`Something went wrong, but dont fear its not your fault. Error ~~--~~ ${err}`)))
        return messsage.channel.send(`:white_check_mark: ${user.user.tag} is now muted`);
    }else{
        if (!user.roles.cache.has(role.id)) return message.channel.send(":x: This user is still muted");
        await (user.roles.add(role.id).catch(err => message.channel.send(`Something went wrong, but dont fear its not your fault. Error ~~--~~ ${err}`)))

        let timer = setTimeout(function() {
            user.roles.remove(role.id).catch(err => message.channel.send(`Something went wrong, but dont fear its not your fault. Error ~~--~~ ${err}`));
            message.channel.send(`:white_check_mark: ${user.user.tag} is now unmuted`);
        }, ms(time))

        client.mute.set(message.author.id, timer);
        message.channel.send(`:white_check_mark: ${user.user.tag} has been muted for **${ms(ms(time), {long: true})}**`);
    }    
}
module.exports.config = {
command: "mute"
}