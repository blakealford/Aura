const Discord = require('discord.js');
const colours = require("../JSON/colours.json");
const PaginationEmbed = require('discord.js-pagination')
module.exports = {
    name: "hqa",
    category: "Heroku QA List",
    description: "All heroku questions",
    run: async (client, message, args) => {
        let user = message.mentions.users.first() || message.author; 
        let avatar = user.avatarURL({ dynamic: true, size: 512 }, true); 

        const bins = new Discord.MessageEmbed()
        .setAuthor(`Heroku Hosting Questions`,"https://dailysmarty-production.s3.amazonaws.com/uploads/post/img/509/feature_thumb_heroku-logo.jpg")
        .setDescription('Listed below are ALL of the FAQ of hosting with Heroku')
        .addField('Question #1', "Does the P for the `Procfile` file for hosting **HAVE** to be a capital?\n> Get the answer using `a!procfile`")
        .addField('Question #2', "How do I host using Heroku?\n> Get the answer using `a!hthost`")
        .setFooter(`Author ID ${message.author.id}`)
        .setColor('0x432A99')
        message.channel.send(bins)
}}




