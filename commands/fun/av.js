const Discord = require('discord.js');
const dateformat = require('dateformat')
const colours = require("../src/JSON/colours.json");
const bot = new Discord.Client();
var prefix = "-" 

module.exports.run = async (bot, message, args) => {
let user = message.mentions.users.first() || message.author;
let avatar = user.avatarURL({size: 2048});

const avEmbed = new Discord.MessageEmbed()
.setAuthor(user.tag, avatar)
.setTitle("Avatar")
.setImage(avatar)
.setColor(colours.bot_white)
message.channel.send(avEmbed)
}
module.exports.config = {
    command: "av"
}