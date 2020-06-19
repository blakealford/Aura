const Discord = require('discord.js');
const moment = require("moment");
const colours = require("../JSON/colours.json");
const bot = new Discord.Client();
module.exports = {
    name: "clear",
    category: "moderation",
    description: "Clears an ammount of messages from 1-100",
    run: async (bot, message, args) => {
        let inavildPerms = new Discord.MessageEmbed()
        .setDescription(" <:AuraWarning:722777439352258640>  | You don't have a permissions to preform this command.")
        .setColor(colours.bot_white)
        if (!message.member.hasPermission("MANAGE_MESSAGES") || !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(inavildPerms);
        let imputNumbers = new Discord.MessageEmbed()
        .setDescription("<:AuraCross:722776417368014858> | Please input a number, not a **letter** or **word.**")
        .setColor(colours.bot_white)
        if (isNaN(args[0])) return message.channel.send(imputNumbers) 
        let numberLessThen100 = new Discord.MessageEmbed()
        .setDescription("<:AuraCross:722776417368014858>  | Insert the number less than **100.**")
        .setColor(colours.bot_white)
        if (args[0] > 100) return message.channel.send(numberLessThen100) 
        let numberMoreThen1 = new Discord.MessageEmbed()
        .setDescription("<:AuraCross:722776417368014858>  | Insert the number more than **1.**")
        .setColor(colours.bot_white)
        if (args[0] < 2) return message.channel.send(numberMoreThen1)
        let error = new Discord.MessageEmbed()
        .setDescription(`<:AuraCross:722776417368014858>  | Something went wrong while deleting the messages.`)
        .setColor(colours.bot_white)
        await message.delete()
        await message.channel.bulkDelete(args[0])
        let succesfull = new Discord.MessageEmbed()
        .setDescription(`<:AuraTick:722776339270205471> | I have deleted succesfully deleted **${message.size}/${args[0]}**`)
        .setColor(colours.bot_white)
        .then(messages => message.channel.send(succesfull)).then(d => d.delete({timeout: 10000})) 
        .catch(() => message.channel.send(error))   
  }}
  
