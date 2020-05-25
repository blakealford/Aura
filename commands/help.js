module.exports.run = async (bot, message, args) => {

        case 'help';
        const help = new Discord.MessageEmbed()
        .setTitle('Aura Bot Commands')
        .setThumbnail('https://media.discordapp.net/attachments/714301789352099862/714302588799156316/Aura-Logo.png?width=400&height=400')
        .addFields(
            {name: 'Moderation', value: '`-help moderation`', inline: true }, 
            {name: 'Reaction Roles', value:  '`-help Reaction`', inline: true }, 
            {name: 'Music', value: '`-help Music`', inline: true }, 
            {name: 'Commands', value: '`-help Commands`', inline: true }, 
            {name: 'Extra Support', value: 'Join Our Discord - https://discord.gg/kwC5QAx '}
        )  
        .setColor(0x173f5f)
        .setFooter('Aura Discord Bot | Developed By Varsp');
        message.channel.send(help);



}

module.exports.config = {
    command: "help"
}