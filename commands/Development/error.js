const Discord = require('discord.js');
const colours = require("../JSON/colours.json");
const PaginationEmbed = require('discord.js-pagination')
module.exports = {
    name: "error",
    category: "Development",
    description: "Thatas an error I dont know how to fix",
    run: async (client, message, args) => {
        let user = message.mentions.users.first() || message.author; 
        let avatar = user.avatarURL({ dynamic: true, size: 512 }, true); 

        const bins = new Discord.MessageEmbed()
        .setAuthor(`${message.author.tag}`, avatar)
        .setDescription(`I need the error`)
        .addField("Error please", "Thanks for the code, but what I am suppose to do without knowing the error \n\n Send either an image of the error or uplaod to a bin, find services by doing `a!bins`")
        .setFooter(`Author ID ${message.author.id}`)
        .setColor(colours.blue_light)
        message.channel.send(bins)
}}


//<:Arrow:728090644744241244> 



