const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const colours = require("../JSON/colours.json");
const client = new Discord.Client();
let musicConn;
let musicChannel;
let musicDispatcher;
let queue = [];
let npUrl ="";
  module.exports = {
  name: "stop",
  category: "music",
  description: "Stop a song",
  run: async (client, message, args) => {
    musicConn.disconnect();
    musicConn = null;
    queue = [];            

    return message.channel.send("I have left the Voice Channel")

}}