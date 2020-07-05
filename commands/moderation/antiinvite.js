const dateformat = require('dateformat')
const config = require("../JSON/botconfig.json")
var prefix = config.prefix
const Discord = require("discord.js");
const colours = require("../JSON/colours.json");
const client = new Discord.Client();
module.exports = {
  name: "anti invite",
  category: "config",
  description: "Stops discord server invites from being sent",
  run: async (client, message, args) => {
    let inviteLink = ["discord.gg", "discord.com/invite", "discordapp.com/invite"];

    if (inviteLink.some(word => message.content.toLowerCase().includes(word))) {
      await message.delete();
      return message.channel.send(":x: Sorry you cant send invite links in here")
      .then(m => m.delete({timeout: 10000})) // Add this if you want the message automatically deleted.
    }
  
    // If the user doesn't doing any to the client, return it.
    if (!message.content.startsWith(prefix)) return; 


}}