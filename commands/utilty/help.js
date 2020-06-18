const Discord = require('discord.js');
const colours = require("../JSON/colours.json");
const PaginationEmbed = require('discord.js-pagination')
module.exports = {
    name: "help",
    category: "utilty",
    description: "Sends the help command",
    run: async (bot, message, args) => {
      let pages = ["This is page one, This is page 2, This is page 3, This is page 4, This is page 5, This is page 6, This is page 7"];
      let page = 1;
        
      const help = new Discord.MessageEmbed()
        .setTitle("Aura Commands")
        .setDescription("Find out how you can use Aura in your discord server today, \n report any errors to our [**support server**](https://discord.gg/nv2dGXy)\n[**Invite Aura**](https://discord.com/oauth2/authorize?client_id=714286777388499054&scope=bot&permissions=8) to your server to be apart of the beta")
        .setThumbnail("https://media.discordapp.net/attachments/680529518464598140/721143149719847054/AuraLogo.png?width=410&height=410")
        .addField(":gear: Prefix", "Auras prefix in this server is `a!`")
        .addField(":shield: Moderation", "Find all of the commands related to **Moderation** | `Pg 1`", true)
        .addField(":hammer: Utility", "Find all of the commands related to **Utility** | `Pg 2`", true)
        .addField(":performing_arts: Fun", "Find all of the commands related to **Fun** | `Pg 3`", true)
        .addField(":musical_note: Music", "Find all of the commands related to **Music** | `Pg 4`", true)
        .addField(":tickets: Ticket System", "Find all commands related to **Ticket System** | `Pg 5`", true)
        .addField(":clipboard: Info", "Find all of the commands related to **Info** | `Pg 6`", true)
        .setFooter(`Page ${page} of ${pages.length}`)
        .setColor(colours.bot_white)
        // message.channel.send(help).then (mesaseg =>  {
        //   message.react('◀').then ( r => {
        //     message.react('▶')

        //     const backwardsFilter = (reaction, user) => reaction.emoji.anme === '◀' && user.id === message.auhtor.id;
        //     const fowardsFilter = (reaction, user) => reaction.emoji.anme === '▶' && user.id === message.auhtor.id;

        //     const backwards = message.createReactionCollector(backwardsFilter, { time: 60000 });
        //     const fowwards = message.createReactionCollector(fowardsFilter, { time: 60000 });

        //     backwards.on('collect', r => {
        //       if (page === 1) return;
        //       page--;
        //       emebd.setDescription(`Page ${Page} of ${pages.length}`)
        //       message.edit(help)
        //     })

        //     fowardsFilter.on('collect', r => {
        //       if (page === pages.length) return;
        //       page--;
        //       emebd.setDescription(`Page ${Page} of ${pages.length}`)
        //       message.edit(help)

        //     })

        //   })
        }}

        // const moderation = new Discord.MessageEmbed()
        // .setTitle("Moderation")
        // const utility = new Discord.MessageEmbed()
        // .setTitle("Utilty")
        // const fun = new Discord.MessageEmbed()

        // const muisc = new Discord.MessageEmbed()

        // const ticketSystem= new Discord.MessageEmbed()

//         // const info = new Discord.MessageEmbed()

//         // pages = [
//         //     help,
//         //     moderation,
//         //     utility,
//         //     fun,
//         //     muisc,
//         //     ticketSystem,
//         //     info,
//         // ]

//         // paginationEmbed(message, pages, emojilist, timeout)

//         const embeds = [];

// for (let i = 1; i <= 5; ++i)
//   embeds.push(new Discord.MessageEmbed().addField('Page', i));

// const Embeds = new PaginationEmbed.Embeds()
//   .setArray(embeds)
//   .setAuthorizedUsers([message.author.id])
//   .setChannel(message.channel)
//   .setPageIndicator(true)
//   .setTitle('Test Title')
//   .setDescription('Test Description')
//   .setFooter('Test Footer Text')
//   .setURL('https://gazmull.github.io/discord-paginationembed')
//   .setColor(0xFF00AE)
//   // Sets the client's assets to utilise. Available options:
//   //  - message: the client's Message object (edits the message instead of sending new one for this instance)
//   //  - prompt: custom content for the message sent when prompted to jump to a page
//   //      {{user}} is the placeholder for the user mention
//   .setClientAssets({ message, prompt: 'Page plz {{user}}' })
//   .setDeleteOnTimeout(true)
//   .setDisabledNavigationEmojis(['delete'])
//   .setFunctionEmojis({
//     '⬆': (_, instance) => {
//       for (const embed of instance.array)
// //         embed.fields[0].value++;
// //     },
//     '⬇': (_, instance) => {
//       for (const embed of instance.array)
//         embed.fields[0].value--;
//     }
//   })


  