const Discord = require("discord.js");
const colours = require("../src/JSON/colours.json");
const bot = new Discord.Client();

var fs = require("fs");
var path = require("path");

var defualtPrefix = "-"

var version = "1.0.2";
var colourBlue = "0x173f5f";

//Files
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if (err) conosle.error(err);

  var jsfiles = files.filter((f) => f.split(".").pop() === "js");
  if (jsfiles.length <= 0) {
    return console.log("No commands found...");
  } else {
    console.log(jsfiles.length + " commands found");
  }

  jsfiles.forEach((f, i) => {
    var cmds = require(`./commands/${f}`);
    console.log * `Command ${f} loading...`;
    bot.commands.set(cmds.config.command, cmds);
  });
});

bot.on("ready", () => {
  console.log(`Aura Bot Is Online Serving ${bot.guilds.cache.size} Servers --- Runing Version ` + version);
  bot.user.setStatus("dnd");
  bot.user.setActivity(`-help || aurabot.xyz `, {    //${bot.guilds.cache.size} servers | -help  (show servers)
    type: "WATCHING",
  });
});

bot.on("message", (message) => {
  //variables
  var sender = message.author;

  var msg = message.content.toUpperCase();

  var prefix = defualtPrefix

  var cont = message.content.slice(prefix.length).split(" ");

  var args = cont.slice(1);

  if (!message.content.startsWith("-")) return;

  var cmd = bot.commands.get(cont[0]);
  if (cmd) cmd.run(bot, message, args);

  switch (cont.toString()) {
    case "varsp":
      const varsp = new Discord.MessageEmbed()
        .setTitle(
          "He is a massive nerd and made the bot And You Should Follow Him On Twitter @DeveloperVarsp"
        )
        .setColor(colours.bot_blue);
      message.channel.send(varsp);
      break;

    //Operational message = All services are online, thank you for using Aura!
    // Offilne message  = Services are offilne, please wait untill they are back up
    //operational colour change = colours.green_light
    //offline colour change = colours.red_light

    case "status":
      const status = new Discord.MessageEmbed()
        .setTitle("Aura Status")
        .addField(
          "**Online**",
          " All services are online running version",
          +version,
          ", thank you for using Aura!"
        )
        .setColor(colours.bot_online)
        .setFooter(
          "Aura Discord Bot | Developed By Void",
          "https://media.discordapp.net/attachments/680529518464598140/716239917352747058/Aura-Logo-Transparent-No-Drop-Shadow.png?width=400&height=400"
        );
      message.channel.send(status);

      break;
  }
});

bot.login("NzE0Mjg2Nzc3Mzg4NDk5MDU0.XuB3dQ.VGaIlGwlhhZ557r4_aElE9xUDck");
