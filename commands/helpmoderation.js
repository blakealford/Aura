const Discord = require('discord.js');
const colours = require("./colours.json");

module.exports.run = async (bot, message, args) => {
    if(message.content === "-help-Moderation ") {
            var helpModeration = new Discord.MessageEmbed()
            .setTitle('Aura Moderator Commands')
            .setThumbnail('https://images-ext-2.discordapp.net/external/RyBiRwUtq8VqdDb6Sm77J303UEziO55Ujqu8FaRCfQ4/https/i.imgur.com/JsgxK3Y.png?width=160&height=160')
            .setDescription('`-ban [member] <Required Reason>` \n Bans a vaild memeber form the server. \n \n `-unban [member id] <Optional Reason>`\n  To know how to get a user id type `-help userid`. \n \n `-kick [member] <Required Reason>` \n Kicks a valid member from the server. \n \n') 
            .setColor(colours.bot_white)
            .setFooter('Aura Discord Bot | Developed By Void', 'https://media.discordapp.net/attachments/680529518464598140/716239917352747058/Aura-Logo-Transparent-No-Drop-Shadow.png?width=400&height=400');
            message.channel.send(helpModeration);
            console.error() }
        }


module.exports.config = {
command: "helpmoderation"
}