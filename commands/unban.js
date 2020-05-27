const Discord = require('discord.js')
const colours = require("./colours.json");

module.exports.run = async (bot, message, args) => {

            if (!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])); {
                let invalidPerms = new Discord.MessageEmbed()
                    .setColor(colours.red_light)
                    .setTitle("You need either `Ban Members` or `Administrator` permissions to execute this command");
                message.channel.send(invalidPerms)

                let bannedMember = await bot.fetchUser(args[0])
                if (!bannedMember); {
                    let invlaidUser = new Discord.MessageEmbed()
                        .setColor(colours.red_light)
                        .setTitle("Please provide a user id to unban someone!, \n To know how to get a user id type `-help userid`");
                    message.channel.send(invlaidUser)

                    let reason = args.slice(1).join(" ")
                    if (!reason) reason = "No reason given"

                    if (!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])); {
                        let invalidPermsBot = new Discord.MessageEmbed()
                            .setColor(colours.red_light)
                            .setTitle("I don't have permission to preform this command! Please allow me to have the `Ban Members` or `Administrator`");
                        message.channel.send(invalidPermsBot)
                        message.delete()
                        try {
                            message.guild.unban(bannedMember, {reason: reason})
                            let unBannedMember = new Discord.MessageEmbed()
                            .setColor(colours.green_light)
                            .setAuthor(`Unban Moderation`, message.author.displayAvatarURL({
                                dynamic: true,
                                format: 'png'
                            }))
                            .addField("**User**:", `${bannedMember.userName} (${bannedMember.id})`)
                            .addField("**Responsible Moderator**:", message.author.username)
                            .addField("**Command Executed In**:", message.channel)
                            .addField("**Date**:", moment.utc(message.createdAt).format('dddd, MMMM Do YYYY'))
                            .addField("**Reason**:", reason)
                            .setFooter('Aura Discord Bot | Developed By Varsp');
                        message.channel.send(unBannedMember)
                        } catch(e) {
                            console.log(e.message)
                        }

                    }
                }
            }}


            module.exports.config = {
                command: "unaban"
            }