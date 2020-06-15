
const Discord = require('discord.js');
const dateformat = require('dateformat')
const colours = require("../JSON/colours.json");
const bot = new Discord.Client();
module.exports = {
    name: "serverinfo",
    category: "utilty",
    description: "Sends server info",
    run: async (bot, message, args) => {
        let icon = message.guild.iconURL({size: 2048}); 
    
        let region = {
          "brazil": ":flag_br:  Brazil",
          "eu-central": ":flag_eu:  Central Europe",
          "singapore": "Singapore",
          "london": "London",
          "russia": "Russia",
          "japan": "Japan",
          "hongkong": "Hongkong",
          "sydney": "Sydney",
          "us-central": "U.S. Central",
          "us-east": "U.S. East",
          "us-south": "U.S. South",
          "us-west": "U.S. West",
          "eu-west": "Western Europe"
        }
        
        // Members
        let member = message.guild.members;
        let offline = member.cache.filter(m => m.user.presence.status === "offline").size,
            online = member.cache.filter(m => m.user.presence.status === "online").size,
            idle = member.cache.filter(m => m.user.presence.status === "idle").size,
            dnd = member.cache.filter(m => m.user.presence.status === "dnd").size,
            robot = member.cache.filter(m => m.user.bot).size,
            total = message.guild.memberCount;
        
        // Channels
        let channels = message.guild.channels;
        let text = channels.cache.filter(r => r.type === "text").size,
            vc = channels.cache.filter(r => r.type === "voice").size,
            category = channels.cache.filter(r => r.type === "category").size,
            totalchan = channels.cache.size;
        
        // Region
        let location = region[message.guild.region];
        
        // Date
        let x = Date.now() - message.guild.createdAt;
        let h = Math.floor(x / 86400000) 
        let created = dateformat(message.guild.createdAt); 
        
        const embed = new Discord.MessageEmbed()
        .setColor(colours.bot_white)
        .setTimestamp(new Date())
        .setThumbnail(icon)
        .setFooter('©AuraDevelopmet 2020 All Rights Reserved')
        .setAuthor(message.guild.name, icon)
        .addField("Owner", `${message.guild.owner.tag}`, true)
        .addField("Date Created", `${created}`, true)
        .addField(`Channels [${totalchan}]`, `<:VoidChannel:706209600134971494> ${text} Text <:VoidSpeak:721201705156477058> ${vc} Voice <:VoidInfo:706209600013205576> ${category} Categories`,)
        .addField("Region", location)
        .addField("Roles", message.guild.roles.cache.size)
        .addField("Boosts","<:AuraBoost:721690552617271337> " + message.guild.premiumSubscriptionCount + " Boosts")
        .addField(`Members`, `<:AuraAdded:721117662486200453>  ${online} <:AuraFixed:721117662650040361> ${idle}<:AuraError:721117662867882054> ${dnd} <:AuraRemoved:721178281377923074> ${offline} \nTotal: ${total} \nBots: ${robot}`)
        message.channel.send(embed); 
  }}

  //<:VoidSettings:706209600269058159> 