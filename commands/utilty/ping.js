const Discord = require('discord.js');
const dateformat = require('dateformat')
const colours = require("../JSON/colours.json");
const client = new Discord.Client();
module.exports = {
  name: "ping",
  category: "utilty",
  description: "Grabs API & User ping",
  run: async (client, message, args) => {
    message.channel.send(`🏓 Pinging....`).then((msg) => {
      const _ = new Discord.MessageEmbed()
        .setTitle("🏓 Pong!")
        .setDescription(
          `:hourglass:  Latency is ${Math.floor(
            msg.createdTimestamp - message.createdTimestamp
          )}ms\n:electric_plug:  API Latency is ${Math.round(client.ws.ping)}ms`
        )
        .setColor(colours.client_white)
      msg.edit(_);
      msg.edit("\u200B");
    });
}}