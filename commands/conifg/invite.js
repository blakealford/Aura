const Discord = require('discord.js');
const moment = require("moment");
const colours = require("../JSON/colours.json");
const client = new Discord.Client();
module.exports = {
  name: "invite",
  category: "config",
  description: "Sends an invite to the discord client",
  run: async (client, message, args) => {
const invite = new Discord.MessageEmbed()
.setDescription("<:AuraTick:722776339270205471> | Liking Aura, And What Me In Your Server? [Click Here](https://discord.com/oauth2/authorize?client_id=714286777388499054&scope=client&permissions=8) To Invite Me!")
.setColor(colours.client_white)
message.channel.send(invite)
}}

