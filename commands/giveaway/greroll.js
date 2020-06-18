    const Discord = require('discord.js');
    const ms = require('ms');
    const colours = require("../JSON/colours.json");
    const bot = new Discord.Client();
    module.exports = {
      name: "greroll",
      category: "giveaway",
      description: "Re roles the giveaway command",
      run: async (bot, message, args) => {
        if (!message.member.hasPermission("MANAGE_GUILD") && !message.member.roles.cache.some(r => r.name.toLowerCase() === "giveaway")) return message.channel.send("❌ | You don't have `MANAGE_GUILD` permission or `Giveaway` role to manage giveaways!");
        let id = args[0];
        if (!id) return message.channel.send("❌ | Please provide a giveaway id.");
        let hasGiveaway = this.client.GiveawaysManager.giveaways.find((g) => g.messageID === id);
        if (!hasGiveaway) {
            return message.channel('Unable to find a giveaway with id `' + id + '`');
        }
        this.client.GiveawaysManager.reroll(hasGiveaway.messageID, {
            messages: {
                congrat: "🎉 New winner(s) : {winners}! 🎉",
                error: "❌ No valid participations!"
            }
        })
            .then(() => {
                if (message.deletable) message.delete();
            })
            .catch((e) => {
                message.channel.send("❌ | Invalid giveaway id!");
            });

}};