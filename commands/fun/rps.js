const Discord = require('discord.js');
const moment = require("moment");
const colours = require("../JSON/colours.json");
const config = require("../JSON/botconfig.json")
module.exports = {
    name: "rps",
    category: "fun",
    description: "Play a game of rock paper scissors",
run: async (bot, message) => {
   const args = message.content.slice(config.prefix.length).split(/ +/);
   const command = args.shift().toLowerCase();

   let replies = ["rock", "papper", "scissors"];
   let result = Math.floor(Math.random() * replies.length);

   let uReply = args[0];
   if(!uReply){
       return message.channel.send("Make your move with either `rock`, `papper` or `scissors`.")
   }
   if(!replies.includes(uReply)){
       return message.channel.send("Thats not one of the options boss")
   }

   if(replies[result] === uReply){
       return message.channel.send("Looks we tied, we wont tie again")
   } else if (uReply === "rock") {
       if(replies[result] === "rock"){
           message.cahnnel.send("Haha you bot, I win! :trophy:")
       } else return message.channel.send("Lucky guess, you win! :trophy:")
   } else if (uReply === "scissors") {
    if(replies[result] === "rock"){
        message.cahnnel.send("Haha you bot, I win! :trophy:")
    } else return message.channel.send("Lucky guess, you win! :trophy:")
   } else if (uReply === "papper") {
    if(replies[result] === "scissors"){
        message.cahnnel.send("Haha you bot, I win! :trophy:")
    } else return message.channel.send("Lucky guess, you win! :trophy:")
}

}}