const Discord = require('discord.js');
const moment = require("moment");
const colours = require("../JSON/colours.json");
const bot = new Discord.Client();
module.exports = {
  name: "kick",
  category: "moderation",
  description: "Kicks a user",
  run: async (bot, message, args) => {
    let invaildPerms = new Discord.MessageEmbed()
    .setDescription("<:AuraDown:721175040376438824> | You don't have a permissions to preform this command.")
    .setColor(colours.bot_white)
    if (!message.member.hasPermission("KICK_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(invaildPerms);
    let user = message.mentions.users.first(); 
    let member = message.guild.member(user);
    let reason = args.slice(1).join(" ");
    let pleaseMention = new Discord.MessageEmbed()
    .setDescription("<:AuraDown:721175040376438824> | Please mention the user ```usage | a!kick [user] <reason>```")
    .setColor(colours.bot_white)    
    if (!user) return message.channel.send(pleaseMention);
    let kickYourself = new Discord.MessageEmbed()
    .setDescription("<:AuraDown:721175040376438824> | You can't kick yourself.")
    .setColor(colours.bot_white)    
    if (user.id === message.author.id) return message.channel.send(kickYourself);
    let kickAura = new Discord.MessageEmbed()
    .setDescription("<:AuraDown:721175040376438824> | You can't kick me.")
    .setColor(colours.bot_white)    
    if (user.id === bot.user.id) return message.channel.send(kickAura);
    
    if (!reason) reason = "No reason provided";
    let Avatar = user.displayAvatarURL();
    let memberKicked = new Discord.MessageEmbed()
    .setTitle("Kick Command")
    .setAuthor(user.tag, Avatar)
    .setFooter("Aura | The Moderation Bot For You")
    .setDescription(`<:AuraUpvote:721174999456809023> | Successfully kicked **${user.tag}**`)
    .setColor(colours.bot_white)
    .addFields(
        { name: "Moderator", value: `${message.author.tag}`, inline: false },
        { name: "Kick User", value: `${user.tag}`, inline: false },
        { name: "Reason", value: `\`${reason}\``, inline: false },
        {
          name: "Date (M/D/Y)",
          value: `${new Intl.DateTimeFormat("en-US").format(Date.now())}`,
          inline: false,
        })
    let unableToKick = new Discord.MessageEmbed()
        .setDescription(`<:AuraDown:721175040376438824> | I was unable to kick the member.`)
        .setColor(colours.bot_white)    

    member.kick(reason).then(() => {
      message.channel.send(memberKicked);
    }).catch(err => {
      message.reply(unableToKick);
    })  
}}
