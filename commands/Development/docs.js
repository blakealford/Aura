// const Discord = require("discord.js");
// const request = require("request");
// const usedCommand = new Set();
// const config = require("../JSON/botconfig.json");
// module.exports = {
//   name: "docs",
//   category: "Development",
//   description: "Seach the discord.js docs",
//   run: async (client, message, args) => {
//     if (!args[1]) {
//       let epicgamerembed = new Discord.MessageEmbed()
//         .setTitle("Not Enough Args")
//         .setDescription(`Please be more descriptive. \`a!docs <query>\``)
//         .setColor("RED");
//       message.channel.send(epicgamerembed);
//     } else {
//       let queryString = args[0];
//       let docs = `https://djsdocs.sorta.moe/v2/embed?src=master&q=${queryString}`;
//       let response = await request(docs);
//       var jsonembed = JSON.parse(response);
//       message.channel.send({ embed: jsonembed });

//       function error(res, name, message) {
//         const json = { status: res.statusCode, error: name };
//         if (message) json.message = message;
//         res.json(json);
//       }
//       function notFound(res, message) {
//         res.status(404);
//         return error(res, "Not Found", message);
//       }
//       function badRequest(res, message) {
//         res.status(400);
//         return error(res, "Bad Request", message);
//       }
//     }
//   },
// };
