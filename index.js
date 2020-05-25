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
    switch(cont.toString()){
    case 'help':
        const help = new Discord.MessageEmbed()
        .setTitle('Aura Bot Commands')
        .addField(
            {name: 'Moderation', value: '`-help moderation`', inline: true }, 
            {name: 'Reaction Roles', value:  '`-help Reaction`', inline: true }, 
            {name: 'Music', value: '`-help Music`', inline: true }, 
            {name: 'Commands', value: '`-help Commands`', inline: true }, 
        )  
        .setColor(0x173f5f)
        .setFooter('Aura Discord Bot | Developed By Varsp');
        message.channel.send(help);
        
    break; 

        case 'varsp':
            const varsp = new Discord.MessageEmbed() 
            .setTitle('He is a massive nerd and made the bot')
            .setColor(0x4457C1);
            message.channel.send(varsp);

            break; 
    }
})

bot.login(process.env.token);