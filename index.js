const Discord = require('discord.js');

const bot = new Discord.Client();

var fs = require('fs');
var path = require('path');

var version = ('1.0.1');

var colourBlue = ("0x173f5f");

//Files
bot.commands = new Discord.Collection();

fs.readdir('./commands/', (err, files) => {
    if(err) conosle.error(err); 

    var jsfiles = files.filter(f => f.split('.').pop() === 'js');
    if(jsfiles.length <= 0) { return console.log('No commands found...')}
    else { console.log(jsfiles.length + ' commands found') }

    jsfiles.forEach((f, i) => {
        var cmds = require(`./commands/${f}`);
        console.log*(`Command ${f} loading...`)
        bot.commands.set(cmds.config.command, cmds); 
    })

})


bot.on('ready', () =>{
    console.log('Aura Bot Is Now Online! Running Version ' + version);
    bot.user.setStatus('dnd')
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

    var cmd = bot.commands.get(cont[0])
    if (cmd) cmd.run(bot, message, args); 

    switch(cont.toString()){

        case 'varsp':
            const varsp = new Discord.MessageEmbed()
            .setTitle('He is a massive nerd and made the bot And You Should Follow Him On Twitter @DeveloperVarsp')
            .setColor(0x173f5f);
            message.channel.send(varsp);
    break; 
6
        
      //Operational message = All services are online, thank you for using Aura!
     // Offilne message  = Services are offilne, please wait untill they are back up

        case 'status':
            const status = new Discord.MessageEmbed()
            .setTitle('Aura Status')
            .addField('**Online**', ' All services are online, thank you for using Aura!')
            .setColor(0x173f5f)
            .setFooter('Aura Discord Bot | Developed By Varsp');
            message.channel.send(status);

    break;

    //Plugin Commands
    
    case 'moderation':
        const moderation = new Discord.MessageEmbed()
               .setTitle('Moderator Commands')
               .setThumbnail('https://images-ext-2.discordapp.net/external/RyBiRwUtq8VqdDb6Sm77J303UEziO55Ujqu8FaRCfQ4/https/i.imgur.com/JsgxK3Y.png?width=160&height=160')
               .addField('N/A', 'Soon To Come')
               .setColor(0x173f5f)
               .setFooter('Aura Discord Bot | Developed By Varsp');
                message.channel.send(moderation);
    }
})

bot.login(process.env.token);