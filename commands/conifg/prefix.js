// const Discord = require("discord.js");
// const db = require("../../db");
// const colours = require("../JSON/colours.json");
// const client = new Discord.Client();
// module.exports = {
//   name: "preifx",
//   category: "config",
//   description: "Change guilds prefix",
//   run: async (client, message, args) => {

// }}


// if (!message.member.permisions.has("ADMINISTRATOR")) return;
// if (!args[0])
// return message.channel.send(
//     `The prefix for **${message.guild.name}** is \`${
//         (await db.get(`Prefix_${message.guild.id}`))
//         ? await db.get(`Prefix_${message.guilf.id}`)
//         : "-"
//     }\``
//  );
//  await db.get(`Prefix_${message.guild.id}`, args[0]);
//  message.channel.send(`I have set the servers prefix to \`${args[0]}\``)