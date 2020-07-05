const Discord = require('discord.js');
const dateformat = require('dateformat')
const colours = require("../JSON/colours.json");
const client = new Discord.Client();
const api = require("imageapi.js")
var prefix = "a!" 
module.exports = {
  name: "meme",
  category: "fun",
  description: "Sends a meme from reddit)",
run: async (client, message, args) => {
  let subreddits = ["comedyheaven", "dank", "meme", "memes"];
  let subreddit =
    subreddits[Math.floor(Math.random() * subreddits.length - 1)];
  let img = await api(subreddit);
  const Embed = new Discord.MessageEmbed()
    .setTitle(`A meme from r/${subreddit}`)
    .setURL(`https://reddit.com/r/${subreddit}`)
    .setColor(colours.client_white)
    .setFooter('A meme a day keeps the docotor away :thumbsup: ')
    .setImage(img);
  message.channel.send(Embed);
}}