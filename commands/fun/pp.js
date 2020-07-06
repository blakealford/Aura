const Discord = require('discord.js');
const colours = require("../JSON/colours.json");
const PaginationEmbed = require('discord.js-pagination')
module.exports = {
    name: "pp",
    category: "fun",
    description: "How big is your pp?",
    run: async (client, message, args) => {
message.channel.send(`8${"=".repeat(Math.floor(Math.random() * 15))}D`);

    }}