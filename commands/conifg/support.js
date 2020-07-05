const Discord = require('discord.js');
const moment = require("moment");
const colours = require("../JSON/colours.json");
const client = new Discord.Client();
module.exports = {
  name: "support",
  category: "config",
  description: "Sends an invite to the support server",
  run: async (client, message, args) => {
let support = new Discord.MessageEmbed()
.setDescription("<:AuraTick:722776339270205471> | Are you having problems with Aura? Then join our [support server](https://discord.gg/) and we will do our best to help you!")
.setColor(colours.client_white)
message.channel.send(support)
}}

