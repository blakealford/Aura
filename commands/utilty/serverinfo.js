
const Discord = require('discord.js');
const dateformat = require('dateformat')
const colours = require("../JSON/colours.json");
const client = new Discord.Client();
module.exports = {
    name: "serverinfo",
    category: "utilty",
    description: "Sends server info",
    run: async (client, message, args) => {
        let icon = message.guild.iconURL({ dynamic: true, size: 512 }, true ); 
    
        let region = {
          "brazil": ":flag_br:  Brazil",
          "eu-central": ":flag_eu:  Central Europe",
          "singapore": ":flag_sg: Singapore",
          "london": ":england: London",
          "russia": ":flag_ru: Russia",
          "japan": ":flag_jp: Japan",
          "hongkong": ":flag_jp: Hongkong",
          "sydney": ":flag_au: Sydney",
          "us-central": ":flag_us: U.S. Central",
          "us-east": ":flag_us: U.S. East",
          "us-south": ":flag_us: U.S. South",
          "us-west": ":flag_us: U.S. West",
          "eu-west": ":england: Western Europe"
        }
        
        // Members
        let member = message.guild.members;
        let offline = member.cache.filter(m => m.user.presence.status === "offline").size,
            online = member.cache.filter(m => m.user.presence.status === "online").size,
            idle = member.cache.filter(m => m.user.presence.status === "idle").size,
            dnd = member.cache.filter(m => m.user.presence.status === "dnd").size,
            roclient = member.cache.filter(m => m.user.client).size,
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
        .setColor(colours.client_white)
        .setTimestamp(new Date())
        .setThumbnail(icon)
        .setFooter(`${message.guild.id}`)
        .setAuthor(message.guild.name, icon)
        .addField("Owner", `${message.guild.owner}`, true)
        .addField("Date Created", `${created}`, true)
        .addField(`Channels [${totalchan}]`, `${text} Text Channels ${vc} Voice Channels ${category} Categories`,)
        .addField("Region", location)
        .addField(`Roles [${ message.guild.roles.cache.size}]`, message.guild.roles.cache.size)
        .addField("Boosts","<:AuraBoost:721690552617271337> " + message.guild.premiumSubscriptionCount + " Boosts")
        .addField(`Members`, `<:AuraAdded:721117662486200453>  ${online} <:AuraFixed:721117662650040361> ${idle}<:AuraError:721117662867882054> ${dnd} <:AuraRemoved:721178281377923074> ${offline} \nTotal: ${total} \nclients: ${roclient}`)
        message.channel.send(embed); 
  }}

  //<:VoidSettings:706209600269058159> 