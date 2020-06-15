const Discord = require('discord.js');
const moment = require("moment");
const colours = require("../JSON/colours.json");
const bot = new Discord.Client();
module.exports = {
  name: "invite",
  category: "config",
  description: "Sends an invite to the discord bot",
  run: async (bot, message, args) => {
const invite = new Discord.MessageEmbed()
.setDescription("<:AuraUpvote:721174999456809023> | Liking Aura, And What Me In Your Server? [Click Here](https://discord.com/oauth2/authorize?client_id=714286777388499054&scope=bot&permissions=8) To Invite Me!")
.setColor(colours.bot_white)
message.channel.send(invite)
}}

