const Discord = require('discord.js');
const dateformat = require('dateformat')
const colours = require("../src/JSON/colours.json");
const bot = new Discord.Client();
module.exports = {
  name: "ping",
  category: "utilty",
  description: "Grabs API & User ping",
  run: async (bot, message, args) => {
    message.channel.send(`🏓 Pinging....`).then((msg) => {
      const _ = new Discord.MessageEmbed()
        .setTitle("Pong!")
        .setDescription(
          `🏓 Pong!\nLatency is ${Math.floor(
            msg.createdTimestamp - message.createdTimestamp
          )}ms\nAPI Latency is ${Math.round(bot.ws.ping)}ms`
        )
        .setColor("0xd36868")
      msg.edit(_);
      msg.edit("\u200B");
    });
}}