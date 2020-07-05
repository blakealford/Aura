const Discord = require('discord.js');
const colours = require("../JSON/colours.json");
const PaginationEmbed = require('discord.js-pagination')
module.exports = {
    name: "code",
    category: "Development",
    description: "Wheres the code man?",
    run: async (client, message, args) => {
        let user = message.mentions.users.first() || message.author; 
        let avatar = user.avatarURL({ dynamic: true, size: 512 }, true); 

        const bins = new Discord.MessageEmbed()
        .setAuthor(`${message.author.tag}`, avatar)
        .setDescription(`We can't help without the code`)
        .addField("Sharing Code", "If your code is over **10** lines, I recommand you use a bin! do `a!bins` for a list of bins")
        .addField("Sharing Errors", "Sharing errors and code is the same, use a bin or take a screenshot in highquality. If you dont have image perms use [Imgur](imgur.com)")
        .setFooter(`Author ID ${message.author.id}`)
        .setColor(colours.blue_light)
        message.channel.send(bins)
}}


//<:Arrow:728090644744241244> 



