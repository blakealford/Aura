const Discord = require('discord.js');
const colours = require("../src/JSON/colours.json");
const bot = new Discord.Client();
const ms = require('ms');

bot.mute = new Map();


module.exports.run = async (bot, message, args) => {     
  let client = message.guild.members.cache.get(bot.user.id).roles.highest;
  if (!message.member.hasPermission("MANAGE_MESSAGES") || !message.member.hasPermission("MUTE_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) {
        return message.channel.send(":x: You don't have permissions to preform this command");
      }
      
      let user = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
      if (!user) return message.channel.send(":x: You need to mention a user, example --> `-mute [user] <reason>`.");
      // Optional:
      if (user.id === bot.user.id) return message.channel.send(":x: You can't mute me.");
      if (user.id === message.author.id) return message.channel.send(":x: You can't mute yourself.");
      let role = message.guild.roles.cache.find(r => r.name === "Muted");
      if (!role) return message.channel.send(":x: Couldn't find the `Muted` role.");
      if (role.position > client.position) return message.channel.send(":x: The role is higher than me.");
      
      let time = args[1];
      
      if (!time) {
        if (user.roles.cache.has(role.id)) return message.channel.send(":x: The user is still muted.");
        await (user.roles.add(role.id).catch(err => message.channel.send(`Something went wrong but dont threat its not your fualt. Error ~~--~~ ${err}`)))
        return message.channel.send(`:white_check_mark: ${user.user.tag} is now muted.`);
      } else {
        if (user.roles.cache.has(role.id)) return message.channel.send(":x: The user is already muted.");
        await (user.roles.add(role.id).catch(err => message.channel.send(`Something went wrong but dont threat its not your fualt. Error ~~--~~ ${err}`)))
        
        let timer = setTimeout(function() {
          user.roles.remove(role.id).catch(err => message.channel.send(`Something went wrong but dont threat its not your fualt. Error ~~--~~ ${err}`));
          message.channel.send(`:white_check_mark: ${user.user.tag} is now muted.`);
        }, ms(time))
        
        bot.mute.set(user.user.id, timer);
        message.channel.send(`:white_check_mark: ${user.user.tag} has been muted for **${ms(ms(time), {long: true})}**`);
      }
    }
    
module.exports.config = {
command: "mute"
}