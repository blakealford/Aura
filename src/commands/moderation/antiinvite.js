const dateformat = require('dateformat')
var prefix = config.prefix;
const Discord = require("discord.js");
const colours = require("../src/JSON/colours.json");
const { config } = require('./ban');
const bot = new Discord.Client();
module.exports = {
  name: "anti invite",
  category: "config",
  description: "Stops discord server invites from being sent",
  run: async (bot, message, args) => {
    let inviteLink = ["discord.gg", "discord.com/invite", "discordapp.com/invite"];

    if (inviteLink.some(word => message.content.toLowerCase().includes(word))) {
      await message.delete();
      return message.channel.send(":x: Sorry you cant send invite links in here")
      .then(m => m.delete({timeout: 10000})) // Add this if you want the message automatically deleted.
    }
  
    // If the user doesn't doing any to the bot, return it.
    if (!message.content.startsWith(prefix)) return; 


}}