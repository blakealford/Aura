const Discord = require('discord.js');
const moment = require("moment");
const colours = require("../JSON/colours.json");
const bot = new Discord.Client();
module.exports = {
  name: "ban",
  category: "moderation",
  description: "Bans a member",
  run: async (bot, message, args) => {
    let invaildPerms = new Discord.MessageEmbed()
    .setDescription("<:AuraDown:721175040376438824> | You don't have a permissions to preform this command.")
    .setColor(colours.bot_white)
    if (!message.member.hasPermission("BAN_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(invaildPerms);
    let user = message.mentions.users.first();    
    let member = message.guild.member(user);
    let reason = args.slice(1).join(" ");
    
    let pleaseMention = new Discord.MessageEmbed()
    .setDescription("<:AuraDown:721175040376438824> | Please mention a user ```usage | a!ban [user] <reason>```")
    .setColor(colours.bot_white)
    if (!user) return message.channel.send(pleaseMention);
    let banYourself = new Discord.MessageEmbed()
    .setDescription("<:AuraDown:721175040376438824> | You can't ban yourself.")
    .setColor(colours.bot_white)
    if (user.id === message.author.id) return message.channel.send(banYourself);
    let banAura = new Discord.MessageEmbed()
    .setDescription("<:AuraDown:721175040376438824> | You can't ban me.")
    .setColor(colours.bot_white)
    if (user.id === bot.user.id) return message.channel.send(banAura);
    
    if (!reason) reason = " No Reason Provided";
    let Avatar = user.displayAvatarURL();
    let memberBanned = new Discord.MessageEmbed()
    .setTitle("Ban Command")
    .setAuthor(user.tag, Avatar)
    .setFooter("©AuraDevelopmet 2020 All Rights Reserved")
    .setDescription(`<:AuraUpvote:721174999456809023> | Successfully banned **${user.tag}**`)
    .setColor(colours.bot_white)
    .addFields(
        { name: "Moderator", value: `${message.author.tag}`, inline: false },
        { name: "Banned User", value: `${user.tag}`, inline: false },
        { name: "Reason", value: `\`${reason}\``, inline: false },
        {
          name: "Date (M/D/Y)",
          value: `${new Intl.DateTimeFormat("en-US").format(Date.now())}`,
          inline: false,
        })
    
        let unableToBan = new Discord.MessageEmbed()
        .setDescription("<:AuraDown:721175040376438824> | I was unable to banned the member.")
        .setColor(colours.bot_white)


    member.ban(reason).then(() => {
      message.channel.send(memberBanned);
    }).catch(err => {
      message.reply(unableToBan);
    })
}}

