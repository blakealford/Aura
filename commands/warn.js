const Discord = require('discord.js')
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
var colourBlue = ("0x173f5f");

module.exports.run = async (bot, message, args) => {


    if (!messgae.member.hasPermission("MANAGE_MEMBERS")) return message.reply("You do not have permission to preform this action");
    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!wUser) return message.reply("couldn't find them yo")
    if (wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("Theyu waaaay too kewl");
    let reason = args.join(" ").slice(22);

    if (!warns[wUser.id]) warns[wUser.id] = {
        warns: 0
    };

    warns[wUser.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err);
    }); 

    let warnEmbed = new discord.MesageEmbed()
    .setDiscription("Warns")
    .setAuthor("message.author.username")
    .setColour(+ colourBlue)
    .addField("Warned User", wUser.tag)
    .addField("Warned In", message.channel)
    .addField("Number of Warnings", warns[wUser.id].warns)
    .addField("Reason", reason); 
    
    let warnchannel = message.guild.channel.find(`name`, "incidents");
    if(!warnchannel) return message.reply("Couldnt find that channel");

    warnchannel.send(warnEmbed)

    if(warns[wUser.id].warns == 2){
        let muterole =Message.guild.roles.cache.find(r => r.name === "Muted")
        if(!muterole) return message.reply("role could not be found, Please create the 'Muted' role");

        let mutetime = "10s";
        await(wUser.addRole(muterole.id));
        message.channel.send(`${wUser.tag} has been temporarily muted.`);

        setTimeout(function(){
            wUser.removeRole(mute.id)
            mesage.channel.reply(`${wUser.tag} has been unmuted`) 
        }, ms(mutetime))
    }

    if(warns[wUser.id].warns == 3){
        message.guild.member(wUser).kick(reason);
        message.channel.send(`${wUser.tag} has been kicked.`)
        
    }

}

module.exports.config = {
    command: "warn"
}