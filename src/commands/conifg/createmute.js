const Discord = require('discord.js');
const colours = require("../JSON/colours.json");
const config = require("../JSON/botconfig.json/")
let prefix = config.prefix
module.exports = {
    name: "createmute",
    category: "config",
    description: "Creates a mi",
    run: async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_GUILD", "MANAGE_ROLES_OR_PERMISSIONS") || !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<:AuraDown:721175040376438824> | You don't have a permissions to preform this command.");
     if (args[0].toLowerCase() == "create") {
         let rNmae = message.content.spli(`${preifx}mute create `).join("");
             let rColor;
      args.forEach((arg) => {
        if (arg.startsWith("#")) {
          rColor = arg;
        }
      });
      if (!rName) {
        return message.channel.send(
          `You did not specify a name for your role!`
        );
      }
      if (!rColor) {
        return message.channel.send(
          `You did not specify a color for your role!`
        );
      }
      if (rColor >= 16777215)
        return message.channel.send(
          `That hex color range was too big! Keep it between 0 and 16777215`
        );
      if (rColor <= 0)
        return message.channel.send(
          `That hex color range was too small! Keep it between 0 and 16777215`
        );
      rName = rName.replace(`${rColor}`, ``);
      let rNew = await message.guild.roles.create({
        data: {
          name: rName,
          color: rColor,
        },
      });
      const Embed = new MessageEmbed()
        .setTitle(`New role!`)
        .setDescription(
          `"${rName}" was creaed, this will be used as your muted role.\nPlease change the permissions on this role to the following `Send Messages` to off.`
        )
        .setColor(rColor);
      message.channel.send(Embed);
    }
    }};
  
