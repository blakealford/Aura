const Discord = require("discord.js");
const moment = require("moment");
const colours = require("../JSON/colours.json");
module.exports = {
  name: "slowmode",
  category: "moderation",
  description: "Sets the slwomode of the channel",
  run: async (client, message, args) => {
  let invalidPerms = new Discord.MessageEmbed()
  .setTitle("<:AuraWarning:722777439352258640>  | You don't have a permissions to preform this command. ```usage | -slowmode [time] <optional reason>```")
  .setColor(colours.client_white)
  if (!message.member.permissions.has("MANAGE_CHANNELS"))
    return message.channel.send(invalidPerms);
    let numberPlease = new Discord.MessageEmbed()
    .setDescription("<:AuraCross:722776417368014858> | That is word, please make sure it is a number ```usage | -slowmode [time] <optional reason>```")
    .setColor(colours.client_white)
    if (isNaN(args[0])) numberPlease
    let setTime = new Discord.MessageEmbed()
  .setDescription("<:AuraCross:722776417368014858> | You need to specify the time in seconds in which you wish this Channel's slow mode to be set to")
  .setColor(colours.client_white)
    if (!args[0])
    return message.channel.send(setTime);
  let reason = args[1];
  if (!reason) {
    reason == "No reason provided!";
  }
  let changedSlowmode = new Discord.MessageEmbed()
  .setDescription(`<:AuraTick:722776339270205471> | I have set the slowmode for this channel to **__${args[0]}__**`)
  .setColor(colours.client_white)
  message.channel.setRateLimitPerUser(args[0]);
  message.channel.send(changedSlowmode);
}}
