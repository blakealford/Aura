const Discord = require("discord.js");
const colours = require("../src/JSON/colours.json");
const moment = require("moment")
module.exports = {
  name: "userinfo",
  category: "utilty",
  description: "Sends unserinfo",
  run: async (bot, message, args) => {
    let user = message.mentions.users.first() || message.author; // You can do it by mentioning the user, or not.
    
    if (user.presence.status === "dnd") user.presence.status = "Do Not Disturb";
    if (user.presence.status === "idle") user.presence.status = "Idle";
    if (user.presence.status === "offline") user.presence.status = "Offline";
    if (user.presence.status === "online") user.presence.status = "Online";
    
    function game() {
      let game;
      if (user.presence.activities.length >= 1) game = `${user.presence.activities[0].type} ${user.presence.activities[0].name}`;
      else if (user.presence.activities.length < 1) game = "None"; // This will check if the user doesn't playing anything.
      return game; // Return the result.
    }
    
    let x = Date.now() - user.createdAt; // Since the user created their account.
    let y = Date.now() - message.guild.members.cache.get(user.id).joinedAt; // Since the user joined the server.
    let created = Math.floor(x / 86400000); // 5 digits-zero.
    let joined = Math.floor(y / 86400000);
    
    const member = message.guild.member(user);
    let nickname = member.nickname !== undefined && member.nickname !== null ? member.nickname : "None"; // Nickname
    let createdate = moment.utc(user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss"); // User Created Date
    let joindate = moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss"); // User Joined the Server Date
    let status = user.presence.status; // DND, IDLE, OFFLINE, ONLINE
    let avatar = user.avatarURL({size: 2048}); // Use 2048 for high quality avatar.
    
    const embed = new Discord.MessageEmbed()
    .setTitle("")
    .setAuthor(user.tag, avatar)
    .setThumbnail(avatar)
    .setFooter('Aura Discord Bot | Developed By Void')
    .setColor(colours.bot_white)
    .addField("User ID", user.id)
    .addField("Nickname", nickname, true)
    .addField("Account Created At", `${createdate} \n> since ${created} day(s) ago`)
    .addField("Joined Server At", `${joindate} \n> since ${joined} day(s) ago`)
    .addField("Status", status, true)
    
    message.channel.send(embed);
}}