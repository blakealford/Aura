const Discord = require('discord.js');
const moment = require("moment");
const colours = require("../JSON/colours.json");
module.exports = {
    name: "google",
    category: "fun",
    description: "Cant find the answer? ask google)",
run: async (client, message, args) => {
let user = message.mentions.users.first() || message.author;
let avatar = user.avatarURL({size: 2048});

var google = new Discord.MessageEmbed()
.setThumbnail('https://images-ext-1.discordapp.net/external/I27buoArv-wa9FbAlfokPFNEF2dLDKnVQT1c3siiQak/%3Fitemid%3D7538369/https/media1.tenor.com/images/658493dd24608e7bff1b502f2dda6ab3/tenor.gif?width=398&height=186')
.setDescription('Google! The Best Assistant Around\n\n Need Help Unreleated To **Aura** or **Void**\n\n Click Here To Enter **[Google](https://www.google.com/)**')
.setColor(colours.client_white)
.setFooter('©AuraDevelopmet 2020 All Rights Reserved');
message.channel.send(google);

}}