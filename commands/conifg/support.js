const Discord = require('discord.js');
const moment = require("moment");
const colours = require("../JSON/colours.json");
const bot = new Discord.Client();
module.exports = {
  name: "support",
  category: "config",
  description: "Sends an invite to the support server",
  run: async (bot, message, args) => {
let support = new Discord.MessageEmbed()
.setDescription("<:AuraUpvote:721174999456809023> | Are you having problems with Aura? Then join our [support server](https://discord.gg/) and we will do our best to help you!")
.setColor(colours.bot_white)
message.channel.send(support)
}}

