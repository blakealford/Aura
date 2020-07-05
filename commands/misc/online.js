const Discord = require("discord.js");
const colours = require("../JSON/colours.json");
const client = new Discord.Client();
var version = "1.3"
module.exports = {
  name: "online",
  category: "misc",
  description: "Online message for Aura",
  run: async (client, message, args) => {
    const status = new Discord.MessageEmbed()
      .setDescription("[Aura Status](https://auraclient.xyz)\n\nIf there is an ongoing incident with Aura, please be patient and wait for Aura to return.\n\It is conceivable that staff members may not know about an outage, if you believe this is the case run `-report` command in **our server** and state if you believe  there is a outage or a bug\n\nDuring a downtime/outage please refrain from asking our <@&698468101393612910> team and staff members when aura will be back up. \n\nWe will not be able to help so keep up to date with outages and status updates in this channel.\n\nThank you for being patience!")
      .setColor(colours.client_white)
    message.channel.send(status);
  },
};

//Operational message = All services are online, thank you for using Aura!
// Offilne message  = Services are offilne, please wait untill they are back up
//operational colour change = colours.green_light
//offline colour change = colours.red_light


// If there is an ongoing incident with Dyno, please be patient and wait for Dyno to return.

// Dyno may be offline in some servers, but online in others.
// To know for sure when it's back online for you, try using the ?ping command in your server.

// During a downtime, neither the staff nor developers here will be able to tell you when it will be fixed in your server. Please follow the updates posted in this channel, or try to use Dyno in your server.

// Thanks for your patience! 



