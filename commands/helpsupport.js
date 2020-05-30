const Discord = require('discord.js');
const colours = require("./colours.json");

module.exports.run = async (bot, message, args) => {
    if(message.content === "-help-Support ") {
            var helpSupport = new Discord.MessageEmbed()
            .setTitle('Aura Support Staff')
            .setThumbnail('https://images-ext-2.discordapp.net/external/RyBiRwUtq8VqdDb6Sm77J303UEziO55Ujqu8FaRCfQ4/https/i.imgur.com/JsgxK3Y.png?width=160&height=160')
            .setDescription('Aura Has A 24/7 Support Staff, Feel free to DM us on [**Twitter**](https://twitter.com/AuraStatus) Or Email Use At  ~~--~~ auradiscordinquires@gmail.com') 
            .setColor(colours.bot_white)
            .setFooter('Aura Discord Bot | Developed By Void', 'https://media.discordapp.net/attachments/680529518464598140/716239917352747058/Aura-Logo-Transparent-No-Drop-Shadow.png?width=400&height=400');
            message.channel.send(helpSupport);
            console.error() }
        }


module.exports.config = {
command: "helpmusic"
}