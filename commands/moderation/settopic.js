const Discord = require('discord.js');
const colours = require("../JSON/colours.json");
const PaginationEmbed = require('discord.js-pagination')
module.exports = {
    name: "settopic",
    category: "moderation",
    description: "Sets channel topic",
    run: async (client, message, args) => {
if (!message.member.hasPermission('MANAGE_CHANNELS')) {
    return message.channel.send({
        embed: {
            color: colours.client_white,
            description: '<:AuraError:729237692054896721> You don\'t have the `Manage Channels` permission.',
        },
    });
}

let channel = message.mentions.channels.first(),
topic = args.slice(1).join(' ');

if (!channel) topic = args.join(' '), channel = message.channel;

if (!topic) {
    return message.channel.send({
        embed: {
            color: colours.client_white,
            description: 'Include a **topic**.',
        },
    });
}

if (args.length > 200) {
    return message.channel.send({
        embed: {
            color: colours.client_white,
            description: '<:AuraError:729237692054896721> The channel topic must be less than 200 characters.',
        },
    });
}

await channel.setTopic(topic);
return message.channel.send({
    embed: {
        color: colours.client_white,
        description: `<:AuraTick:729239339417993230> Topic for <#${channel.id}> has been set.`,
    },
})}}