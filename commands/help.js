const Discord = require('discord.js')



module.exports.run = async (bot, message, args) => {

    if(args[0]) {
        let command = args[0];
        if(bot.commands.has(command)){
            command = bot.commands.get(comand);
            var help = new Discord.MessageEmbed()
            .setTitle('Aura Bot Commands')
            .setThumbnail('https://media.discordapp.net/attachments/714301789352099862/714302588799156316/Aura-Logo.png?width=400&height=400')
            .addFields(
                {name: 'Moderation', value: '`-help moderation`', inline: true }, 
                {name: 'Reaction Roles', value:  '`-help Reaction`', inline: true }, 
                {name: 'Music', value: '`-help Music`', inline: true }, 
                {name: 'Commands', value: '`-help Commands`', inline: true }, 
                {name: 'Extra Support', value: 'Join Our Discord - discord.gg/kwC5QAx'}
            )  
            .setColor(0x173f5f)
            .setFooter('Aura Discord Bot | Developed By Varsp');
            message.channel.send(help);
        }}
        if(!args[0]) {
            msg.delete();
            let embed = new Discord.MessageEmbed()
            .setTitle('Join Our Discord For Support') 
            .addField(' -> discord.gg/kwC5QAx \n\n or DM the lead developer DevVarsp#0003')
            .setColor(0x173f5f)
            .setFooter('Aura Discord Bot | Developed By Varsp');
            meessage.author.send(embed);
        }
}

module.exports.config = {
command: "help"
}