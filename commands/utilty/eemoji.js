const Discord = require("discord.js");
const { parse } = require("twemoji-parser");
const colours = require("../JSON/colours.json")
module.exports = {
  name: "eemoji",
  category: "utility",
  description: "Inlarges an emoji",
  run: async (client, message, args) => {
    const emoji = args[0];
    if (!emoji) return message.channel.send("No emoji provided!");

    let custom = Discord.Util.parseEmoji(emoji);

    if (custom.id) {
      const embed = new Discord.MessageEmbed()
        .setTitle(`Enlarged version of ${emoji}`)
        .setColor(colours.client_white)
        .setImage(
          `https://cdn.discordapp.com/emojis/${custom.id}.${
            custom.animated ? "gif" : "png"
          }`
        );
      return message.channel.send(embed);
    } else {z
      let parsed = parse(emoji, { assetType: "png" });
      if (!parsed[0]) return message.channel.send("Invalid emoji!");
      const embed = new Discord.MessageEmbed()
        .setTitle(`Enlarged version of ${emoji}`)
        .setColor(colours.client_white)
        .setImage(parsed[0].url);
      return message.channel.send(embed);
    }
  },
};
