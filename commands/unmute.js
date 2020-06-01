const Discord = require('discord.js');
const colours = require("./colours.json");

module.exports.run = async (bot, message, args)  => {
    if (!message.member.hasPermission("MANAGE_MESSAGES") || !message.member.hasPermission("MUTE_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) {
        return messsage.channel.send("You dont have the correct permissions to preform this command, `Manage Messages or Mute Members`");
    }

    let user = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]); 
    if (!user) return message.channel.send(":x: You need to mention a user");

    let role = message.guild.roles.cache.find(r => r.name === "Muted");
    if (!role) return message.channel.send(":x: Couldn't find the mute role");

    if (user.roles.cache.find(r => r.name === "Muted")) return message.channel.send("The user is already muted")

    await user.roles.remove(role.id).catch(err => message.channel.send(`Something went wrong, but dont fear its not your fault. Error ~~--~~ ${err}`))
    await clearTimeout(client.mute.get(message.author.id));
    await client.mute.delete(message.author.id);
    await message.channel.send(`${user.user.tag} is now unmuted.`)

}
module.exports.config = {
command: "unmute"
}