const Discord = require('discord.js');
const colours = require("../JSON/colours.json");
const PaginationEmbed = require('discord.js-pagination')
module.exports = {
    name: "bins",
    category: "Development",
    description: "Sends options for sharing code/errors",
    run: async (client, message, args) => {
        let user = message.mentions.users.first() || message.author; 
        let avatar = user.avatarURL({ dynamic: true, size: 512 }, true); 

        const bins = new Discord.MessageEmbed()
        .setAuthor(`${message.author.tag}`, avatar)
        .setDescription(`Use these bins for sharing code/errors:`)
        .addField("Popular/Recommanded:", "- [Sourcebin](https://sourceb.in/)\n- [Ghostbin](https://ghostbin.co/)")
        .addField("Others:", "- [Hastebin](https://hastebin.com/)\n- [Hatebin](https://hatebin.com/)\n - [Hasteb.in](https://hasteb.in/)")
        .addField("Sharing Code Images:", "- [Imgur](https://imgur.com/)")
        .setFooter(`Author ID ${message.author.id}`)
        .setColor(colours.blue_light)
        message.channel.send(bins)
}}


//<:Arrow:728090644744241244> 



