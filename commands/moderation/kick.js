const Discord = require('discord.js');
const moment = require("moment");
const colours = require("../JSON/colours.json");
const client = new Discord.Client();
module.exports = {
  name: "kick",
  category: "moderation",
  description: "Kicks a user",
  run: async (client, message, args) => {
    let invaildPerms = new Discord.MessageEmbed()
    .setDescription("<:AuraWarning:722777439352258640>  | You don't have a permissions to preform this command.")
    .setColor(colours.client_white)
    if (!message.member.hasPermission("KICK_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(invaildPerms);
    let user = message.mentions.users.first(); 
    let member = message.guild.member(user);
    let reason = args.slice(1).join(" ");
    let pleaseMention = new Discord.MessageEmbed()
    .setDescription(" <:AuraCross:722776417368014858> | Please mention the user ```usage | a!kick [user] <reason>```")
    .setColor(colours.client_white)    
    if (!user) return message.channel.send(pleaseMention);
    let kickYourself = new Discord.MessageEmbed()
    .setDescription(" <:AuraCross:722776417368014858> | You can't kick yourself.")
    .setColor(colours.client_white)    
    if (user.id === message.author.id) return message.channel.send(kickYourself);
    let kickAura = new Discord.MessageEmbed()
    .setDescription(" <:AuraCross:722776417368014858> | You can't kick me.")
    .setColor(colours.client_white)    
    if (user.id === client.user.id) return message.channel.send(kickAura);
    
    if (!reason) reason = "No reason provided";
    let Avatar = user.displayAvatarURL();
    let memberKicked = new Discord.MessageEmbed()
    .setTitle("Kick Command")
    .setAuthor(user.tag, Avatar)
    .setFooter("Aura | The Moderation client For You")
    .setDescription(`<:AuraTick:722776339270205471> | Successfully kicked **${user.tag}**`)
    .setColor(colours.client_white)
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
        .setDescription(`<:AuraWarning:722777439352258640>  | I was unable to kick the member.`)
        .setColor(colours.client_white)    

    member.kick(reason).then(() => {
      message.channel.send(memberKicked);
    }).catch(err => {
      message.reply(unableToKick);
    })  
}}
