const Discord = require("discord.js");
const colours = require("./colours.json");

module.exports.run = async (bot, message, args) => {
  var features = new Discord.MessageEmbed()
    .setTitle(':clipboard: HERE ARE SOME COMMANDS :clipboard:')
    .setDescription('My prefix is `-`, you can find more commands & information on Aura at our website --> [aurabot.xyz](https://aurabot.xyz)')
    .addField('Moderation', '```kick\nban\nslwomode\nlockdown\nmute\nunmute\nunban\nclear```', true)
    .addField('Utilty', '```status\nhelp\nnick\nbotstats\nuserinfo\nserverinfo\nping\nembed```', true)
    .addField('Fun', '```google\nspotify\nav\npoll\nmeme\ngiveaway\n8ball\nreddit```', true)
    .addField('Important Information', '```Aura bot is still under development and we would love some feedback on the bot. To give feedback join our discord server by doing "-auradiscord" and head over to suggestions. Thank you for using aura\n - Aura Development```')
    .addField('Donate and get some nice perks', '[Click here to see information on donating](https://aurabot.xyz/docs-page.html#section-3), or do `-donate` to get more info.')
    .setColor(colours.bot_white)
    .setFooter('Aura Discord Bot | Developed By Void');
    message.channel.send(features);

}

module.exports.config = {
  command: "features",
};
