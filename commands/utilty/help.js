const Discord = require('discord.js');
const colours = require("../JSON/colours.json");
const PaginationEmbed = require('discord.js-pagination')
module.exports = {
    name: "help",
    category: "utilty",
    description: "Sends the help command",
    run: async (client, message, args) => {
      const msg = new Discord.MessageEmbed()
        .setAuthor('Aura Help', 'https://media.discordapp.net/attachments/716540407982325770/728081390175911996/Aura-Free.png?width=360&height=360')
        .setDescription('You would have recieved a message from me that will contain all of the commands that Aura has. \n\n To see a full list of the commands + a detailed explanation of each command check out our [website](https://auraclient.xyz) ')
        .setColor(colours.client_white)
        message.channel.send(msg)

        const help = new Discord.MessageEmbed()
        .setAuthor('Aura Help', 'https://media.discordapp.net/attachments/716540407982325770/728081390175911996/Aura-Free.png?width=360&height=360')
        .setDescription("● Aura is still in `Beta` and may have a lot of bugs, if you come along one report to `Zylo#0001` \n\n More commands get added everyday")
        .setThumbnail("https://media.discordapp.net/attachments/654453772218662913/728094034005983232/icons8-about-240.png?width=192&height=192")
        .addField("<:Arrow:728090644744241244> Server Prefix - `(2)`", "My prefix's in this server are | `a!`, <@714286777388499054>")
        .addField("<:Arrow:728090644744241244> Moderation - `(7)`", "`Ban`, `Clear`, `kick`, `mute` `report`, `slowmode`, `unmute`")
        .addField("<:Arrow:728090644744241244> Utility - `[4]`", "`announce`, `nick`, `ping`, `links`")
        .addField("<:Arrow:728090644744241244> Development - [5]", "`bins`, `code`, `docs`, `error`, `readthedocs`")
        .addField("<:Arrow:728090644744241244> Fun - `(8)`", "`av`, `google`, `meme`, `poll`, `spotify`, `weather`, `who`, `rps`")
        .addField("<:Arrow:728090644744241244> Informatuon - `(4)`", "`serverinfo`, `userinfo`, `clientinfo`, `changelog`")
        .addField("<:Arrow:728090644744241244> Music - `(8)`", "***Under Development***")
        .addField("-------- Info --------", "[Invite](https://discord.com/oauth2/authorize?client_id=714286777388499054&scope=client&permissions=2079845878) Aura for your self ● Join Our Support [Server](https://discord.gg/) ")
        .setColor(colours.client_white)
        message.author.send(help)
}}


//<:Arrow:728090644744241244> 



