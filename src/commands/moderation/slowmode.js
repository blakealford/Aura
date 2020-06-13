const Discord = require("discord.js");
const moment = require("moment");
const colours = require("../JSON/colours.json");
module.exports = {
  name: "slowmode",
  category: "moderation",
  description: "Sets the slwomode of the channel",
  run: async (bot, message, args) => {
  if (!args[0])
    return message.channel.send(
      ":x: You need to specify the time in seconds in which you wish this cahnnel's slow mode to be set to"
    );
  if (isNaN(args[0])) "<:AuraDown:721175040376438824> | That is word, please make sure it is a number";
  if (!message.member.permissions.has("MANAGE_CHANNELS"))
    return message.channel.send(
      "<:AuraDown:721175040376438824> | You don't have a permissions to preform this command."
    );
  let reason = args[1];
  if (!reason) {
    reason == "No reason provided!";
  }
  message.channel.setRateLimitPerUser(args[0]);
  message.channel.send(
    `<:AuraUpvote:721174999456809023> | I have set the slowmode for this channel to **__${args[0]}__**`
  );
}}
