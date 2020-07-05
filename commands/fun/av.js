const Discord = require('discord.js');
const dateformat = require('dateformat')
const colours = require("../JSON/colours.json");
const client = new Discord.Client();
var prefix = "-" 
module.exports = {
    name: "av",
    category: "fun",
    description: "Sends users avatar",
    run: async (client, message, args) => {
        let user = message.mentions.users.first() || message.author;
        let avatar = user.avatarURL({size: 2048});
        
        const avEmbed = new Discord.MessageEmbed()
        .setAuthor(user.tag, avatar)
        .setTitle("Avatar")
        .setImage(avatar)
        .setColor(colours.client_white)
        message.channel.send(avEmbed)
  }}


/*
./ = same directory. ../ = up one folder. ../foldername/filename.x = example
.
├── a
│   └── b
│       └── c
└── x
    └── y
        └── z
            └ 1.js
if you are in the folder c, to get to 1.js you would use "../../../x/y/z/1.js" 
*/