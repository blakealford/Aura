const Discord = require('discord.js');
const dateformat = require('dateformat')
const colours = require("../src/JSON/colours.json");
const bot = new Discord.Client();
//const api = require("imageapi.js")
var prefix = "-" 

module.exports.run = async (bot, message, args) => {
    let subreddits = ["comedyheaven", "dank", "meme", "memes"];
    let subreddit =
      subreddits[Math.floor(Math.random() * subreddits.length - 1)];
    let img = await api(subreddit);
    const Embed = new MessageEmbed()
      .setTitle(`A meme from r/${subreddit}`)
      .setURL(`https://reddit.com/r/${subreddit}`)
      .setColor(colours.bot_white)
      .setFooter('Aura Discord Bot | Developed By Void')
      .setImage(img);
    message.channel.send(Embed);
};    
module.exports.config = {
    command: "meme"
}
