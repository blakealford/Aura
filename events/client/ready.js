const {prefix} = require("../../commands/JSON/botconfig.json")
module.exports=client=>{
    client.on('ready', () => {
        console.log(`Ready to serve in ${client.channels.cache.size} channels on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users.`);
        client.user.setActivity(`Updating to Version 1.4`, {type: 'WATCHING'}).catch(console.error);
        })}

        //client.user.setActivity(`a!help || Over ${client.users.cache.size} Using Aura`, {type: 'LISTENING'}).catch(console.error);