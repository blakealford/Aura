// const Discord = require('discord.js');
// const ytdl = require('ytdl-core');
// const colours = require("../JSON/colours.json");
// const client = new Discord.Client();
// let musicConn;
// let musicChannel;
// let musicDispatcher;
// let queue = [];
// let npUrl ="";
//   module.exports = {
//   name: "play",
//   category: "music",
//   description: "Play a song",
//   run: async (client, message, args) => {
    
//   let url = args[0];
//   if(!url) {
//       return message.channel.send("Please provide a URL")
//   }

//   let voiceChannel = message.member.voice.channel;
//   if(!voiceChannel) {
//   return message.channel.send(":speaker: **Join a voice channel to play music**")
//   }

//  if(musicConn && musicConn.channel.id !== voiceChannel.id) {
//      return message.channel.send(":speaker: **I am already play music!**")
//  } 

//  queue.push(url);

//  if(!musicConn) {
//      voiceChannel.join().then(conn => {
//          musicConn = conn;
//          playNextSong();
//      })
//  }

//   playNextSong(voiceChannel, url)
//   function playNextSong(){

//     voiceChannel.join().then((conn) => {
//        let nextUrl = queue[0];
//         musicDispatcher = musicConn.play(ytdl(nextUrl, {filter: "audioonly", quality: "highestaudio"}));

//         message.channel.send(":speaker: **Now Playing**" + url+"in"+ voiceChannel)

//         musicDispatcher.on("speaking", (speaking) => {
//             if(!speaking){

//                 if(queue.length === 0) {
//                     message.channel.send(":speaker: **Song has ended**, disconetcing from "+voiceChannel)
//                     musicConn.disconnect();
//                     musicConn = null;
//                 } else {
//                     playNextSong();
//                 }
//             }
//         })
//     });



// }}}
