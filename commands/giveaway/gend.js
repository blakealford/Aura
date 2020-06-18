const Discord = require('discord.js');
const ms = require('ms');
const colours = require("../JSON/colours.json");
const bot = new Discord.Client();
module.exports = {
  name: "gend",
  category: "giveaway",
  description: "Ends a giveaway",
  run: async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_GUILD") && !message.member.roles.cache.some(r => r.name.toLowerCase() === "giveaway")) return message.channel.send("❌ | You don't have `MANAGE_GUILD` permission or `Giveaway` role to manage giveaways!");
    let id = args[0];
    if (!id) return message.channel.send("❌ | Please provide a giveaway id.");
    let hasGiveaway = this.bot.GiveawaysManager.giveaways.find((g) => g.messageID === id);
    if (!hasGiveaway) {
        return message.channel('Unable to find a giveaway with id `' + id + '`');
    }
    this.bot.GiveawaysManager.edit(hasGiveaway.messageID, {
        setEndTimestamp: Date.now()
    })
    .then(() => {
        message.channel.send('Giveaway will end in less than ' + (this.bot.GiveawaysManager.options.updateCountdownEvery / 1000) + ' seconds...').then(m => m.delete({ timeout: 2000 }));
    })
    .catch((e) => {
        message.channel.send("Oh no! Something went wrong: ```js\n"+e.message + "```");
    });
    if (message.deletable) message.delete();
    return;
  }};