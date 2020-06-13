const Discord = require("discord.js");
const colours = require("../JSON/colours.json");
module.exports = {
  name: "unmute",
  category: "moderation",
  description: "Unmutes a muted member",
  run: async (bot, message, args) => {
    bot.mute = new Discord.Collection();
    if (
      !message.member.hasPermission("MANAGE_MESSAGES") ||
      !message.member.hasPermission("MUTE_MEMBERS") ||
      !message.member.hasPermission("ADMINISTRATOR")
    ) {
      return message.channel.send(
        ":x: You don't have permissions to preform this command"
      );
    }
  
    let user =
      message.guild.member(message.mentions.users.first()) ||
      message.guild.members.cache.get(args[0]);
    if (!user)
      return message.channel.send(
        ":x: You need to mention a user, example --> `-unmute [user] <reason>`."
      );
  
    let role = message.guild.roles.cache.find((r) => r.name === "Muted");
    if (!role) return message.channel.send(":x: Couldn't find the `muted` role.");
  
    if (!user.roles.cache.find((r) => r.name === "Muted"))
      return message.channel.send(":x: The user isn't muted.");
  
    await user.roles
      .remove(role.id)
      .catch((err) =>
        message.channel.send(
          `Something went wrong but dont threat its not your fualt. Error ~~--~~ ${err}`
        )
      );
    await clearTimeout(bot.mute.get(user.user.id));
    await bot.mute.delete(user.user.id);
    await message.channel.send(
      `:white_check_mark: ${user.user.tag} has been unmuted.`
    );
}}
