const Discord = require("discord.js");
const colours = require("../JSON/colours.json");
const moment = require("moment")
module.exports = {
  name: "userinfo",
  category: "utilty",
  description: "Sends unserinfo",
  run: async (client, message, args) => {
    let user = message.mentions.users.first() || message.author; 
    
    if (user.presence.status === "dnd") user.presence.status = "<:AuraError:721117662867882054> | Do Not Disturb  ";
    if (user.presence.status === "idle") user.presence.status = "<:AuraFixed:721117662650040361> | Idle ";
    if (user.presence.status === "offline") user.presence.status = "<:AuraRemoved:721178281377923074> | Offline ";
    if (user.presence.status === "online") user.presence.status = "<:AuraAdded:721117662486200453> | Online ";
    
    function game() {
      let game;
      if (user.presence.activities.length >= 1) game = `${user.presence.activities[0].type} ${user.presence.activities[0].name}`;
      else if (user.presence.activities.length < 1) game = "None"; // checks if the user doesn't playing anything.
      return game; // Return the result.
    }
    
    let x = Date.now() - user.createdAt; // Since the user created their account.
    let y = Date.now() - message.guild.members.cache.get(user.id).joinedAt; // Since the user joined the server.
    let created = Math.floor(x / 86400000); // 5 digits-zero.
    let joined = Math.floor(y / 86400000);
    
    const member = message.guild.member(user);
    let nickname = member.nickname !== undefined && member.nickname !== null ? member.nickname : "None"; // Nickname
    let createdate = moment.utc(user.createdAt).format("dddd, MMMM Do YYYY,"); // User Created Date
    let joindate = moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY,"); // User Joined the Server Date
    let status = user.presence.status; // DND, IDLE, OFFLINE, ONLINE
    let avatar = user.avatarURL({ dynamic: true, size: 512 }, true); 
    
    const embed = new Discord.MessageEmbed()
    .setTitle("")
    .setAuthor(user.tag, avatar)
    .setThumbnail(avatar)
    .setFooter('User ID: '+ user.id)
    .setColor(colours.client_white)
    .addField("Joined", `${joindate}`, true)
    .addField("Registered", `${createdate}`, true)
    .addField(`Role\\`, `<@&${member._roles.join('> <@&')}>`)
    .addField("Nickname", nickname)
    .addField("Current Status", status)
    
    message.channel.send(embed);
}}