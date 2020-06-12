const Discord = require("discord.js");
const colours = require("../src/JSON/colours.json");
const bot = new Discord.Client();
module.exports = {
  name: "online",
  category: "misc",
  description: "Online message for Aura",
  run: async (bot, message, args) => {
    const status = new Discord.MessageEmbed()
      .setTitle("Aura Status")
      .addField(
        "**Online**",
        " All services are online running version",
        +version,
        ", thank you for using Aura!"
      )
      .setColor(colours.bot_online)
      .setFooter(
        "Aura Discord Bot | Developed By Void",
        "https://media.discordapp.net/attachments/680529518464598140/716239917352747058/Aura-Logo-Transparent-No-Drop-Shadow.png?width=400&height=400"
      );
    message.channel.send(status);
  },
};

//Operational message = All services are online, thank you for using Aura!
// Offilne message  = Services are offilne, please wait untill they are back up
//operational colour change = colours.green_light
//offline colour change = colours.red_light


