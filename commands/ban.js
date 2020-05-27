const { MessageEmbed } = require('discord.js')
const moment = require("moment")

module.exports.run = async (bot, message, args) => {

        if (!message.member.hasPermission("BAN_MEMBERS"))
            let userPerms = new Discord.MessageEmbed()
            .setColor(0xFF0000)
            .setTitle("You need `Ban Members` permission to execute this command")
            .setFooter('Aura Discord Bot | Developed By Varsp');
            messsage.channel.send(userPerms)  

        const bReason = args.slice(2).join(" ");
        const bUser = message.mentions.members.first() || message.guild.members.resolve(args[0]);

        if (!bUser)
            let invalidUser = new Discord.MessageEmbed()
            .setColor(0xFF0000)
            .setTitle("Please mention a valid user.")
            .setFooter('Aura Discord Bot | Developed By Varsp');
            messsage.channel.send(invlidUser)   


        if (message.author.id === bUser.id)
            let bYourSelf = new Discord.MessageEmbed()
            .setColor(0xFF0000)
            .setTitle("You cannot ban yourself.")
            .setFooter('Aura Discord Bot | Developed By Varsp');
            messsage.channel.send(bYourSelf)   

        
        if (!message.guild.me.hasPermission("BAN_MEMBERS"))
            let invalidPerms = new Discord.MessageEmbed()
            .setColor(0xFF0000)
            .setTitle("I don't have the `Ban Members` permission to ban a member.")
            .setFooter('Aura Discord Bot | Developed By Varsp');
            messsage.channel.send(invalidPerms)    

        if (bUser.hasPermission("ADMINISTRATOR")) 
        let adminPerms = new Discord.MessageEmbed()
        .setColor(0xFF0000)
        .setTitle(`You can't ban ${bUser.username} due to Admin permission.`)
        .setFooter('Aura Discord Bot | Developed By Varsp');
        messsage.channel.send(adminPerms)
        
        if (!bReason)
            let Reason = new Discord.MessageEmbed()
            .setColor(0xFF0000)
            .setTitle("Please provide a reason.")
            .setFooter('Aura Discord Bot | Developed By Varsp');
            messsage.channel.send(Reason)
        
        let banEmbed = new Discord.MessageEmbed()
            .setAuthor(`Ban Moderation`, message.author.displayAvatarURL({ dynamic: true, format: 'png' }))
            .setColor(0xFF0000)
            .addField("**User**:", bUser.user.tag)
            .addField("**Responsible Moderator**:", message.author.username)
            .addField("**Command Executed In**:", message.channel)
            .addField("**Date**:", moment.utc(message.createdAt).format('dddd, MMMM Do YYYY'))
            .addField("**Reason**:", bReason)
            .setFooter('Aura Discord Bot | Developed By Varsp');
        
        bUser.ban(bReason);
        message.channel.send(banEmbed);
    }
    module.exports.config = {
        command: "ban"
    }