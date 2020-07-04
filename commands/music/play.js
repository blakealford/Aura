const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const colours = require("../JSON/colours.json");
const bot = new Discord.Client();
  module.exports = {
  name: "play",
  category: "music",
  description: "Play a song",
  run: async (bot, message, args) => {
    function playYoutubeURL(textChannel, voiceChannel, url)

    voiceChannel.join().then((con) => {
        let dispatcher = conn.play(ytdl(url, {filter: "audioonly", quality: "highestaudio"}));

        textChannel.send(":speaker: **Now Playing**" + url+"in"+ voiceChannel)

        dispatcher.con("speaking", (speaking) => {
            if(!speaking){
                textChannel.send(":speaker: **Song has ended**, disconetcing from "+voiceChannel)
                conn.disoonect();
            }
        })
    });

  let url = args[0];
  if(!url) {
      return channel.send("Please provide a URL")
  }

  let voiceChannel = message.member.voice.channel;
  if(!voiceChannel) {
  return channel.send(":speaker: **Join a voice channel to play music**")
  }

  let inVoiceChannel = bot.user.voice && bot.user.voice.channel;
  if(inVoiceChannel) {
      return channel.send(":speaker: **I am already play music!**")
  }

  playYoutubeURL(channel, voiceChannel, url)
}}


/*const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const colours = require("../JSON/colours.json");
const bot = new Discord.Client();
module.exports = {
  name: "play",
  category: "music",
  description: "Play a song",
  run: async (bot, message, args) => {
  
}}*/