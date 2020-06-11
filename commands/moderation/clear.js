const Discord = require('discord.js');
const moment = require("moment");
const colours = require("../src/JSON/colours.json");
const bot = new Discord.Client();

module.exports.run = async (bot, message, args) => {
 if (!message.member.hasPermission("MANAGE_MESSAGES") || !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":x: You don't have a permissions to preform this command.");
if (isNaN(args[0])) return message.channel.send(":x: Please input a number, not a **letter** or **word.**") 
if (args[0] > 100) return message.channel.send(":x: Insert the number less than **100.**") 
if (args[0] < 2) return message.channel.send(":x: Insert the number more than **1.**")

await message.delete()
await message.channel.bulkDelete(args[0])
.then(messages => message.channel.send(`:white_check_mark: Deleted **${messages.size}/${args[0]}** messages.`)).then(d => d.delete({timeout: 10000})) 
.catch(() => message.channel.send(":x: Something went wrong, while deleting messages."))
}
module.exports.config = {
    command: "clear"
}