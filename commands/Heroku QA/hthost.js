const Discord = require('discord.js');
const colours = require("../JSON/colours.json");
const PaginationEmbed = require('discord.js-pagination')
module.exports = {
    name: "hthost",
    category: "Heroku QA",
    description: "Heroku question #2 ",
    run: async (client, message, args) => {
        let user = message.mentions.users.first() || message.author; 
        let avatar = user.avatarURL({ dynamic: true, size: 512 }, true); 

        const bins = new Discord.MessageEmbed()
        .setAuthor(`Heroku Hosting Q#2`,"https://dailysmarty-production.s3.amazonaws.com/uploads/post/img/509/feature_thumb_heroku-logo.jpg")
        .setDescription('How do I host using Heroku?')
        .addField('Answer', 'Hosting with heroku is quite simple, theres 3 main things you need\n**#1** - A `Procfile` file in your bot folder\n **#2** - A GitHub account & repository\n **#3** - A heroku account, you can sign up [here](https://signup.heroku.com/)')
        .addField('YouTube Video', "For a more in depth guide watch [How To Host Your Discord Bot](https://www.youtube.com/watch?v=8qIsRzV0Hpg&t=3s)")
        .setFooter(`Author ID ${message.author.id}`)
        .setColor('0x432A99')
        message.channel.send(bins)
}}




