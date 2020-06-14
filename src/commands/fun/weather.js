// const Discord = require('discord.js');
// const moment = require("moment");
// const colours = require("../JSON/colours.json");
// const weather = require('weather-js')
// const bot = new Discord.Client();
// module.exports = {
//   name: "weather",
//   category: "config",
//   description: "Sends the wetaher for a ceratin location",
//   run: async (bot, message, args) => {
//  weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) { 
//     if (err) message.channel.send(err);

//     let invalidLocation = new Discord.MessageEmbed()
//     .setDescription("<:AuraDown:721175040376438824> | You didnt enter a vaild location, please add a valid location.")
//     .setColor(colours.bot_white)

   
//     if (result.length === 0) {
//         message.channel.send(invalidLocation) 
//         return;
//     }
//     var current = result[0].current; 
//     var location = result[0].location;
//       const embed = new Discord.RichEmbed()
//                 .setDescription(`**${current.skytext}**`) 
//                 .setAuthor(`Weather for ${current.observationpoint}`)
//                 .setThumbnail(current.imageUrl)
//                 .setColor(colours.bot_white) 
//                 .addField('Timezone',`UTC${location.timezone}`, true) 
//                 .addField('Degree Type',location.degreetype, true)
//                 .addField('Temperature',`${current.temperature} Degrees`, true)
//                 .addField('Feels Like', `${current.feelslike} Degrees`, true)
//                 .addField('Winds',current.winddisplay, true)
//                 .addField('Humidity', `${current.humidity}%`, true)
//                 message.channel.send({embed});
// message.channel.send(support)
// })}}
