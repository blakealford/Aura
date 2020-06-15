const Discord = require('discord.js');
const colours = require("../JSON/colours.json");
const bot = new Discord.Client();
const ms = require('ms');

bot.mute = new Map();
module.exports = {
  name: "mute",
  category: "moderation",
  description: "Mutes a member",
  run: async (bot, message, args) => {
    let User = message.mentions.users.first();   
    let invaildPerms = new Discord.MessageEmbed()
    .setDescription("<:AuraDown:721175040376438824> | You don't have a permissions to preform this command.")
    .setColor(colours.bot_white)
    let client = message.guild.members.cache.get(bot.user.id).roles.highest;
    if (!message.member.hasPermission("MANAGE_MESSAGES") || !message.member.hasPermission("MUTE_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) {
          return message.channel.send(invaildPerms);
        }
        let muteAura = new Discord.MessageEmbed()
        .setDescription("<:AuraDown:721175040376438824> | You cant mute me.")
        .setColor(colours.bot_white)
        let muteYourslef = new Discord.MessageEmbed()
        .setDescription("<:AuraDown:721175040376438824> | You cant mute yourself.")
        .setColor(colours.bot_white)
        let pleaseMention = new Discord.MessageEmbed()
        .setDescription("<:AuraDown:721175040376438824> | Please mention a user ```usage | a!mute [user].```")
        .setColor(colours.bot_white)
        let cantFindMuted = new Discord.MessageEmbed()
        .setDescription("<:AuraDown:721175040376438824> | Couldn't find the `Muted` role.")
        .setColor(colours.bot_white)
        let roleHigher = new Discord.MessageEmbed()
        .setDescription("<:AuraDown:721175040376438824> | That role is higher then me.")
        .setColor(colours.bot_white)
        let user = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
        if (!user) return message.channel.send(pleaseMention);
        // Optional:
        if (user.id === bot.user.id) return message.channel.send(muteAura);
        if (user.id === message.author.id) return message.channel.send(muteYourslef);
        let role = message.guild.roles.cache.find(r => r.name === "Muted");
        if (!role) return message.channel.send(cantFindMuted);
        if (role.position > client.position) return message.channel.send(roleHigher);
        let Avatar = User.displayAvatarURL();
        
        let time = args[1];
        let Embed1 = new Discord.MessageEmbed()
      .setTitle(`User Muted`)
      .setDescription(
        `User \`${User.tag}\` Was Muted. `
      )
      .setColor(colours.bot_white)
      .setThumbnail(Avatar)
      .setDescription(`<:AuraUpvote:721174999456809023> | Successfully muted **${User.tag}**`)
      .addFields(
        { name: "Moderator", value: `${message.author.tag}`, inline: false },
        { name: "Muted User", value: `${User.tag}`, inline: false },
        {
          name: "Date (M/D/Y)",
          value: `${new Intl.DateTimeFormat("en-US").format(Date.now())}`,
          inline: false,
        }
      );
      let stillMuted = new Discord.MessageEmbed()
      .setDescription("<:AuraDown:721175040376438824> | That user is still muted.")
      .setColor(colours.bot_white)
      let alreadyMuted = new Discord.MessageEmbed()
      .setDescription("<:AuraDown:721175040376438824> | That user is already muted.")
      .setColor(colours.bot_white)
      let Embed3 = new Discord.MessageEmbed()
      .setTitle(`User UnMuted`)
      .setDescription(
        `User \`${User.tag}\` Was UnMuted. `
      )
      .setColor(colours.bot_white)
      .setThumbnail(Avatar)
      .setDescription(`<:AuraUpvote:721174999456809023> | Successfully unmuted **${User.tag}**`)
      .addFields(
        { name: "Moderator", value: `${message.author.tag}`, inline: false },
        { name: "Unmuted User", value: `${User.tag}`, inline: false },
        {
          name: "Date (M/D/Y)",
          value: `${new Intl.DateTimeFormat("en-US").format(Date.now())}`,
          inline: false,
        })
        if (!time) {
          if (user.roles.cache.has(role.id)) return message.channel.send(stillMuted);
          await (user.roles.add(role.id).catch(err => message.channel.send(`Something went wrong but dont threat its not your fualt. Error ~~--~~ \```${err}\````)))
          return message.channel.send(Embed1);
        } else {
          if (user.roles.cache.has(role.id)) return message.channel.send(alreadyMuted);
          await (user.roles.add(role.id).catch(err => message.channel.send(`Something went wrong but dont threat its not your fualt. Error ~~--~~ \```${err}\````)))
          
          let timer = setTimeout(function() {
            user.roles.remove(role.id).catch(err => message.channel.send(`Something went wrong but dont threat its not your fualt. Error ~~--~~ \```${err}\````));
            message.channel.send(Embed3);
          }, ms(time))
  
          let Embed2 = new Discord.MessageEmbed()
      .setTitle(`User Muted`)
      .setDescription(
        `User \`${User.tag}\` Was Muted. `
      )
      .setColor(colours.red_light)
      .setDescription(`<:AuraUpvote:721174999456809023> | Successfully muted **${user.tag}**`)
      .setThumbnail(Avatar)
      .addFields(
        { name: "Moderator", value: `${message.author.tag}`, inline: false },
        { name: "Muted User", value: `${User.tag}`, inline: false },
        { name: "Time", value: `${ms(ms(time), {long: true})}`, inline: false},
        {
          name: "Date (M/D/Y)",
          value: `${new Intl.DateTimeFormat("en-US").format(Date.now())}`,
          inline: false,
        }
      );
          bot.mute.set(user.user.id, timer);
          message.channel.send(Embed2)
        }
}}
