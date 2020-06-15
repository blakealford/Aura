const Discord = require("discord.js");
const colours = require("../JSON/colours.json");
module.exports = {
  name: "unmute",
  category: "moderation",
  description: "Unmutes a muted member",
  run: async (bot, message, args) => {
    let User = message.mentions.users.first();   
    let invaildPerms = new Discord.MessageEmbed()
    .setDescription("<:AuraDown:721175040376438824> | You don't have a permissions to preform this command.")
    .setColor(colours.bot_white)
    bot.mute = new Discord.Collection();
    if (
      !message.member.hasPermission("MANAGE_MESSAGES") ||
      !message.member.hasPermission("MUTE_MEMBERS") ||
      !message.member.hasPermission("ADMINISTRATOR")
    ) {
      return message.channel.send(invaildPerms);
    }
    let pleaseMention = new Discord.MessageEmbed()
    .setDescription("<:AuraDown:721175040376438824> | Please mention a user ```usage | a!unmute [user] <reason>```")
    .setColor(colours.bot_white)
    let cantFindMuted = new Discord.MessageEmbed()
    .setDescription("<:AuraDown:721175040376438824> | Couldn't find the `Muted` role.")
    .setColor(colours.bot_white)
    let instMuted = new Discord.MessageEmbed()
    .setDescription("<:AuraDown:721175040376438824> | That user ins't muted.")
    .setColor(colours.bot_white)

    let user =
      message.guild.member(message.mentions.users.first()) ||
      message.guild.members.cache.get(args[0]);
    if (!user)
      return message.channel.send(pleaseMention);
  
    let role = message.guild.roles.cache.find((r) => r.name === "Muted");
    if (!role) return message.channel.send(cantFindMuted);
  
    if (!user.roles.cache.find((r) => r.name === "Muted"))
      return message.channel.send(instMuted);
  
    await user.roles
      .remove(role.id)
      .catch((err) =>
        message.channel.send(
          `Something went wrong but dont threat its not your fualt. Error ~~--~~ \```${err}\````
        )
      );
      let Avatar = User.displayAvatarURL();
      let Embed1 = new Discord.MessageEmbed()
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
    await clearTimeout(bot.mute.get(user.user.id));
    await bot.mute.delete(user.user.id);
    await message.channel.send(Embed1);
}}
