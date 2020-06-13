const Discord = require('discord.js');
const colours = require("../JSON/colours.json");
module.exports = {
    name: "help",
    category: "utilty",
    description: "Sends the help command",
    run: async (bot, message, args) => {
        if(!args[0])return message.author.send("Check out our bost command list on our website (https://aurabot.xyz) or join the support server at discord.gg/nv2dGXy if you have any unanswered questions.");
    }};
  