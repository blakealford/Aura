const fetch = require("node-fetch");
const { DiscordAPIError } = require("discord.js");
const Discord = require('discord.js')
const colour = require("../JSON/colours.json")
module.exports = {
    name: "lyrics",
    category: "fun",
    description: "get the lyrics of a song",
    run: async (client, message, args) => {
let query = args.join(" ");
if (!query) return message.channel.send("Sorry dude, I can't search air");
fetch(`https://some-random-api.ml/lyrics?title=${encodeURIComponent(query)}`)
.then(res => res.json())
.then(lyrics => {
if (lyrics.error) return message.reply(`What song is that, no lyrics found for \`${query}\``);
const cool = new Discord.MessageEmbed()
.setTitle(`Search Results For ${query}`)
.setDescription(lyrics.lyrics) 
.setColor(colour.client_white)
return message.channel.send(cool)
})}}