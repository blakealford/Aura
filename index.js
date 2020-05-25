`const botconfig = require('./botconfig')

const Discord = require('discord.js');

const bot = new Discord.Client();

var version = ('1.0.0')

const prefix = ('-')

bot.on('ready', () =>{
    console.log('Aura Bot Is Now Online! Running Version ' + version);
    bot.user.setActivity(`${bot.guilds.cache.size} servers | -help`,  { type: 'WATCHING' })                                                                                                                           
});

bot.on('msg', msg=> {

    let args = msg.content.substring(prefix.length).split(" ");
     
    console.log(args[0]);

    switch (args[0].toString()){

    case 'help':
        const help = new Discord.MessageEmbed()
        .setTitle('Aura Bot COmmands')
        .addField(
            {name: 'Moderation', value: '`-help moderation`', inline: true }, 
            {name: 'Reaction Roles', value:  '`-help Reaction`', inline: true }, 
            {name: 'Music', value: '`-help Music`', inline: true }, 
            {name: 'Commands', value: '`-help Commands`', inline: true }, 
        )  
        .setColor(0x173f5f)
        .setFooter('Aura Discord Bot | Developed By Varsp');
        msg.channel.send(help);
        
    break; 

        case 'varsp':
            const varsp = new Discord.MessageEmbed() 
            .setTitle('He is a massive nerd and made the bot')
            .setColor(0x4457C1);
            msg.channel.send(varsp);

            break; 
    }
})

bot.login(process.env.token);`