const Discord = require('discord.js');
const dateformat = require('dateformat')
const colours = require("./colours.json");
const bot = new Discord.Client();
const custom = require('custom');
var prefix = "-" 

module.exports.run = async (bot, message, args) => {
    if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(":x: You don't have a permissions to preform this command.")
    if(!args[0]) return message.channel.send(`:x: You did not specify a custom command name!`);
    if(!args.slice(1).join(" ")) return message.channel.send(`:x: No content specified!`);
    custom.findOne({ Guild: message.guild.id, Command: args[0]},async(err,data) => {
        if(err) throw err;
        if(data){
            data.Content = args.slice(1).join(" ")
            data.save();
            
            message.channel.send(`:white_check_mark: Successfully updated the command \`${args[0]}\``)
        }else if(!data){
            let newData = new custom({
                Guild: message.guild.id,
                Command: args[0],
                Content: args.slice(1).join(" ")
            })
            newData.save();
            message.channel.send(`:white_check_mark: Successfully created the command \`${args[0]}\``)
        }
    })
}
module.exports.config = {
    command: "cc"
}