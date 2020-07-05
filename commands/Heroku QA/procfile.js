const Discord = require('discord.js');
const colours = require("../JSON/colours.json");
const PaginationEmbed = require('discord.js-pagination')
module.exports = {
    name: "procfile",
    category: "Heroku QA",
    description: "Heroku question #1 ",
    run: async (client, message, args) => {
        let user = message.mentions.users.first() || message.author; 
        let avatar = user.avatarURL({ dynamic: true, size: 512 }, true); 

        const bins = new Discord.MessageEmbed()
        .setAuthor(`Heroku Hosting Q#1`,"https://dailysmarty-production.s3.amazonaws.com/uploads/post/img/509/feature_thumb_heroku-logo.jpg")
        .setDescription('Does the P for the `Procfile` file for hosting **HAVE** to be a capital?')
        .addField('Answer', 'Yes, you must have a capital `P` for the file to be recongised, if it is not a captial P it will not work and your bot will not be hosted.')
        .setFooter(`Author ID ${message.author.id}`)
        .setColor('0x432A99')
        message.channel.send(bins)
}}




