// const Discord = require('discord.js');
// const colours = require("../JSON/colours.json");
// const PaginationEmbed = require('discord.js-pagination')
// module.exports = {
//     name: "shutdown",
//     category: "Bot Owner",
//     description: "Shut down the bot",
//     run: async (client, message, args) => {
// const newMessage = await message.channel.send("Are you sure you want shutdown the **entire** bot?");
//     newMessage.react('👍').then(() => newMessage.react('👎'));

//     const filter = (reaction, user) => {
//         return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
//     };

//     newMessage.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
//     .then(async collected => {
//         const reaction = collected.first();

//         if (reaction.emoji.name === '👍') {
//             await message.channel.send("Bot is shutting down.");
//             process.exit();
//         } else {
//             message.reply("Lets pretend that didn't happen.");
//         }
//     })
//     .catch(collected => {
//         message.reply('You reacted with neither a thumbs up, nor a thumbs down.');
//     })}};