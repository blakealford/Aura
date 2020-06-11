const Discord = require("discord.js");
const moment = require("moment");
const colours = require("../src/JSON/colours.json");

module.exports.run = async (bot, message, args) => {
  if (!args[0])
    return message.channel.send(
      ":x: You need to specify the time in seconds in which you wish this cahnnel's slow mode to be set to"
    );
  if (isNaN(args[0])) ":x: That is word, please make sure it is a number";
  if (!message.member.permissions.has("MANAGE_CHANNELS"))
    return message.channel.send(
      "You do not have the `Manage Channels` permission"
    );
  let reason = args[1];
  if (!reason) {
    reason == "No reason provided!";
  }
  message.channel.setRateLimitPerUser(args[0]);
  message.channel.send(
    `:white_check_mark: I have set the slowmode for this channel to **${args[0]}**`
  );
};

module.exports.config = {
  command: "slowmode",
};
