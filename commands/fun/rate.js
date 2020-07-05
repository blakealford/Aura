const Discord = require('discord.js');
const colours = require("../JSON/colours.json");
const PaginationEmbed = require('discord.js-pagination')
module.exports = {
    name: "rate",
    category: "fun",
    description: "Rate command",
    run: async (client, message, args) => {
        let number = Math.floor(Math.random() * 101);
        if (!args[1]) {
            return message.channel.send('I would rate you a ' + number + '/100')
        } else {
            let user = message.mentions.users.first();
            if (!user) {
                return message.channel.send('Who am I rating today')
            }
            return message.channel.send('I would rate ' + user.username + ' a ' + number + '/100')

        }

    }
    }


//<:Arrow:728090644744241244> 



