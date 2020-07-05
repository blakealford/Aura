const Discord = require('discord.js');
const colours = require("../JSON/colours.json");
const PaginationEmbed = require('discord.js-pagination')
module.exports = {
    name: "links",
    category: "utilty",
    description: "Sends the help command",
    run: async (client, message, args) => {
        const links = new Discord.MessageEmbed()
        .setAuthor('Availiable Aura Links')
        .setDescription("Type `a!invite` to copy the invite link to **Aura**")
        .addField("<:Add:728113829719834695> Invite Aura", "[Invite](https://discordapp.com/oauth2/authorize?client_id=714286777388499054&scope=client&permissions=2146958847) Aura" )
        .addField("<:Info:728113829376032849> Support Server", "[discord.gg/zA4A3xN](https://discord.gg/zA4A3xN)" )
        .addField("<:Website:728113830005309500> Auras Websites", "Find Auras websites at [auraclient.xyz](https://auraclient.xyz)" )
        .setColor(colours.client_white)
        message.channel.send(links)
}}


//<:Arrow:728090644744241244> 



