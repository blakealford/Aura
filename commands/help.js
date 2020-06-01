const Discord = require('discord.js');
const colours = require("./colours.json");

module.exports.run = async (bot, message, args)  => {
    if(!args[0])return message.author.send("Check out our bost command list at https://google.com Or join the support server at discord.gg/nv2dGXy if you have any unanswered questions.")
}
module.exports.config = {
command: "help"
}