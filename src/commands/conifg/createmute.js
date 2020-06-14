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
             if (arg.startWith("#")) {
                 rColor = arg; 
             }
            });
            if (!rColor) {
                return.message.channel.send("You Need")
            }
     }
    }};
  