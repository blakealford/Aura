const Discord = require('discord.js');
const colours = require("../JSON/colours.json");
const PaginationEmbed = require('discord.js-pagination')
module.exports = {
    name: "8ball",
    category: "fun",
    description: "8ball command",
    run: async (client, message, args) => {
        if (!args[2]){
            return message.channel.send("Where is the question?")
        }
        let number = Math.floor(Math.random() * 6);
        
        if (number == 0){
            return message.channel.send("Yes, deffinelty so")
        }
        if (number == 1){
            return message.channel.send("No, deffinelty not")
        }
        if (number == 2){
            return message.channel.send("Ask again later")
        }
        if (number == 3){
            return message.channel.send("It is uncertain")
        }
        if (number == 4){
            return message.channel.send("Odds are not in your favour")
        }
        if (number == 5){
            return message.channel.send("Odds are in your fvaour")
        }
}}


//<:Arrow:728090644744241244> 



