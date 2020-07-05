const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./commands/JSON/botconfig.json")
const prefix = config.prefix;
const token = config.token;
const colours = require('./commands/JSON/colours.json')
var version = "1.3"
var fs = require("fs");
var path = require("path");
var colourBlue = "0x6DE0B9";
client.mongoose = require("./Utils/mongoose");
const ytdl = require('ytdl-core')
//Muisc Varibales 
let musicConn;
let musicChannel;
let musicDispatcher;
let queue = [];
let npUrl ="";

client.on('ready', () => {
console.log(`Ready to serve in ${client.channels.cache.size} channels on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users.`);
client.user.setActivity(`a!help || Over ${client.users.cache.size} Using Aura`, {type: 'LISTENING'}).catch(console.error);

});

//Command Handler
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.catergories = fs.readdirSync(__dirname + "/commands/");
["command"].forEach(handler=>{
  require(`./handlers/${handler}`)(client);
});

fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);

  var jsfiles = files.filter((f) => f.split(".").pop() === "js");
  if (jsfiles.length <= 0) {
  } else {
    console.log(jsfiles.length + " commands found");
  }

  jsfiles.forEach((f, i) => {
    var cmds = require(`./commands/${f}`);
    console.log * `Command ${f} loading...`;
    client.commands.set(cmds.config.command, cmds);
  });
});

client.on("message", async message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  if(!message.guild) return;
  if(!message.member) message.member = await message.guild.fetchMember(message);
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if(cmd.length == 0 ) return;
  let command = client.commands.get(cmd)
  if(!command) command = client.commands.get(client.aliases.get(cmd));
  if(command) command.run(client,message,args)

})
  
//Logs
client.on('messageDelete', message => {
  let User = message.mentions.users.first() || message.author; 
  let Avatar = User.displayAvatarURL();
  if(!message.partial) {
    const channel = client.channels.cache.get('728764120911839262');
      if(channel) {
          const embed = new Discord.MessageEmbed()
              .setAuthor(`${message.author.tag}`, Avatar)
              .addField('ID', `\`\`\`fix\nChannel = ${message.channel.id}\nUser = ${message.author.id}\`\`\``)
              .setDescription("**Content**\n "+message.content)
              .setTimestamp()
              .setColor('RANDOM')
          channel.send(embed);
}}});

// client.mongoose.init();
client.login(token);
