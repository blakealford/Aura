const Discord = require('discord.js');
const moment = require("moment");
const colours = require("../JSON/colours.json");
const client = new Discord.Client();
module.exports = {
    name: "clear",
    category: "moderation",
    description: "Clears an ammount of messages from 1-100",
    run: async (client, message, args) => {
        let inavildPerms = new Discord.MessageEmbed()
        .setDescription(" <:AuraWarning:729241847284760686>   | You don't have a permissions to preform this command.")
        .setColor(colours.client_white)
        if (!message.member.hasPermission("MANAGE_MESSAGES") || !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(inavildPerms);
        let imputNumbers = new Discord.MessageEmbed()
        .setDescription("<:AuraError:729237692054896721>  | Please input a number, not a **letter** or **word.**")
        .setColor(colours.client_white)
        if (isNaN(args[0])) return message.channel.send(imputNumbers) 
        let numberLessThen100 = new Discord.MessageEmbed()
        .setDescription("<:AuraError:729237692054896721>   | Insert the number less than **100.**")
        .setColor(colours.client_white)
        if (args[0] > 100) return message.channel.send(numberLessThen100) 
        let numberMoreThen1 = new Discord.MessageEmbed()
        .setDescription("<:AuraError:729237692054896721>   | Insert the number more than **1.**")
        .setColor(colours.client_white)
        if (args[0] < 2) return message.channel.send(numberMoreThen1)
        let error = new Discord.MessageEmbed()
        .setDescription(`<:AuraError:729237692054896721>   | Something went wrong while deleting the messages.`)
        .setColor(colours.client_white)
        await message.delete()
        await message.channel.bulkDelete(args[0])
        let succesfull = new Discord.MessageEmbed()
        .setDescription(`<:AuraTick:729239339417993230>  | I have deleted succesfully deleted **${message.size}/${args[0]}**`)
        .setColor(colours.client_white)
        message.channel.send(succesfull).then(d => d.delete({timeout: 10000}))  
  }}
  
