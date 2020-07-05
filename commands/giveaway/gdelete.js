const Discord = require('discord.js');
const ms = require('ms');
const client = new Discord.Client();
const num = require("num-parse");
module.exports = {
  name: "gdelete",
  category: "giveaway",
  description: "Deletes a Giveaway",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_GUILD") && !message.member.roles.cache.some(r => r.name.toLowerCase() === "giveaway")) return message.channel.send("❌ | You don't have `MANAGE_GUILD` permission or `Giveaway` role to manage giveaways!");
    let id = args[0];
    if (!id) return message.channel.send("❌ | Please provide a giveaway id.");
    let hasGiveaway = this.client.GiveawaysManager.giveaways.find((g) => g.messageID === id);
    if (!hasGiveaway) {
        return message.channel('Unable to find a giveaway with id `' + id + '`');
    }
    this.client.GiveawaysManager.delete(hasGiveaway.messageID)
    .then(() => {
        if (message.deletable) message.delete();
        return;
    })
    .catch((e) => {
        message.channel.send("No giveaway found for `"+id+"`!");
    });
}}
