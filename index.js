const Discord = require('discord.js');

const bot = new Discord.Client();

var version = ('1.0.0')

bot.on('ready', () =>{
    console.log('Aura Bot Is Now Online! Running Version ' + version);
    bot.user.setActivity(`${bot.guilds.cache.size} servers | -help`,  { type: 'WATCHING' })                                                                                                                           
});

bot.on('message', message => {
    //variables
     var sender = message.author;
     var msg = message.content.toUpperCase();
     var prefix = "-";
     var cont = message.content.slice(prefix.length).split(' '); 
     var args = cont.slice(1);
    if(!message.content.startsWith('-')) return;
    switch(cont.toString()){
    
        case 'help':
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
        
    break; 

        case 'varsp':
            const varsp = new Discord.MessageEmbed() 
            .setTitle('He is a massive nerd and made the bot And You Should Follow Him On Twitter @DeveloperVarsp')
            .setColor(0x173f5f);
            message.channel.send(varsp);

    break; 
    
    //Plugin Commands
    
    case 'moderation':
        const moderation = new Discord.MessageEmbed()
               .setTitle('Moderator Commands')
               .setThumbnail('https://images-ext-2.discordapp.net/external/RyBiRwUtq8VqdDb6Sm77J303UEziO55Ujqu8FaRCfQ4/https/i.imgur.com/JsgxK3Y.png?width=160&height=160')
               .setColor(0x173f5f)
               .setFooter('Aura Discord Bot | Developed By Varsp');
                message.channel.send(moderation);
    }
})

bot.login(process.env.token);