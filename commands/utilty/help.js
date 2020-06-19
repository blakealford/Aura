const Discord = require('discord.js');
const colours = require("../JSON/colours.json");
const PaginationEmbed = require('discord.js-pagination')
module.exports = {
    name: "help",
    category: "utilty",
    description: "Sends the help command",
    run: async (bot, message, args) => {
        const help = new Discord.MessageEmbed()
        .setTitle("Aura Commands")
        .setDescription("Find out how you can use Aura in your discord server today, \n report any errors to our [**support server**](https://discord.gg/nv2dGXy)\n[**Invite Aura**](https://discord.com/oauth2/authorize?client_id=714286777388499054&scope=bot&permissions=8) to your server to be apart of the beta")
        .setThumbnail("https://media.discordapp.net/attachments/680529518464598140/721143149719847054/AuraLogo.png?width=410&height=410")
        .addField(":gear: Prefix", "Auras prefix in this server is `a!`")
        .addField(":shield: Moderation", "Find all of the commands related to **Moderation** | `a!help moderation`", true)
        .addField(":hammer: Utility", "Find all of the commands related to **Utility** | `Pg 2`", true)
        .addField(":performing_arts: Fun", "Find all of the commands related to **Fun** | `Pg 3`", true)
        .addField(":musical_note: Music", "Find all of the commands related to **Music** | `Pg 4`", true)
        .addField(":tickets: Ticket System", "Find all commands related to **Ticket System** | `Pg 5`", true)
        .addField(":clipboard: Info", "Find all of the commands related to **Info** | `Pg 6`", true)
        .setColor(colours.bot_white)
        let msg = await message.channel.send(help)  
        await msg.react("▶")

        let reactionFilter = (reaction, user) => (user.id === message.author.id) && !user.bot;
        let reaction = (await msg.awaitReactions(reactionFilter, {
          max: 1
        })).first();

        if (reaction.emoji.name === "▶"){
          msg.delete();
          const helpModeration = new Discord.MessageEmbed()
          .setTitle("Aura Moderation Plugin")
          .addField(":shield: Moderation", "")
          .setColor("0x2E3138")
          .setFooter("Page 2 | Moderation Commands")
          let msg = await message.channel.send(helpModeration)

        }
     
}}



