const Discord = require('discord.js');
const colours = require("./colours.json");

module.exports.run = async (bot, message, args) => { 
    
    if(message.content === "-help Misc ") {
        var helpMisc = new Discord.MessageEmbed()
        .setTitle('Aura Miscesllaneous Commands')
        .setThumbnail('https://media.discordapp.net/attachments/714301789352099862/714302588799156316/Aura-Logo.png?width=400&height=400')
        .setDescription('`-status`\n Shows Aura\'s current status - *Offiline* or *Online* \n \n `-varsp` \n you will just have to use to find out :D \n \n `-version`\n Shows/tells you what version Aura is running.') 
        .setColor(colours.bot_white)
        .setFooter('Aura Discord Bot | Developed By Varsp');
        message.channel.send(helpMisc);
        console.error()
   

        }}


module.exports.config = {
command: "misc"
}