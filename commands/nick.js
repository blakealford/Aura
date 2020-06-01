const Discord = require('discord.js');
const colours = require("./colours.json");

module.exports.run = async (bot, message, args)  => {
    if (!message.member.hasPermission(["MANAGE_NIKCNAMES", "ADMINISTRATOR"])) {
        return message.channel.send({embed: {colour: 0xf94343, description: ":x: You can't use this command" }})
    } 

    let user = message.mentions.users.first(); 
    if (!user) return message.channel.send({embed: {colour: 0xf94343, description: ":x: You need to mention a user" }})

    let nick = args.slice(1).join(" ");
    if (!nick) return message.channel.send({embed: {colour: 0xf94343, description: ":x: You need to input a nickname" }})

    let member = message.guild.members.cache.get(user.id);
    
    await member.setNickname(nick);
    return message.channel.send({embed: {colour: 0xa1ee33, description: `:white_check_mark: Successfully changed **${user.tag}** nick name to **${nick}**`}});
}
module.exports.config = {
command: "nick"
}