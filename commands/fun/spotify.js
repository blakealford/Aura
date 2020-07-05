const Discord = require("discord.js");
const colours = require("../JSON/colours.json");
module.exports = {
  name: "spotify",
  category: "fun",
  description: "Sends spotify track info",
  run: async (client, message, args) => {
    let user = message.mentions.users.first() || message.author;

    let convert = require("parse-ms");
  
    let status = user.presence.activities[0];
  
    if (
      user.presence.activities.length === 0 ||
      (status.name !== "Spotify" && status.type !== "LISTENING")
    )
      return message.channel.send(":x: This user isn't listening to spotify.");
  
    if (
      status !== null &&
      status.type === "LISTENING" &&
      status.name === "Spotify" &&
      status.assests !== null
    ) {
      let image = `https://i.scdn.co/image/${status.assets.largeImage.slice(8)}`,
        url = `https://open.spotify.com/track/${status.syncID}`,
        name = status.details,
        artist = status.state,
        album = status.assets.largeText,
        timeStart = status.timestamps.start,
        timeEnd = status.timestamps.end,
        timeConvert = convert(timeEnd - timeStart);
  
      let minutes =
        timeConvert.minutes < 10
          ? `0${timeConvert.minutes}`
          : timeConvert.minutes;
      let seconds =
        timeConvert.seconds < 10 ? `${timeConvert.seconds}` : timeConvert.seconds;
  
      let time = `${minutes}:${seconds}`;
  
      const spotifyEmbed = new Discord.MessageEmbed()
        .setAuthor(
          "Spotify Track information",
          "https://www.freepnglogos.com/uploads/spotify-logo-png/image-gallery-spotify-logo-21.png"
        )
        .setColor(0x1ed76b)
        .setFooter("Aura | The Moderation client For You")
        .setThumbnail(image)
        .addField("Name:", name, true)
        .addField("Album:", album, true)
        .addField("Artist:", artist, true)
        .addField("Duration:", time, false)
        .addField(
          "Listen now on Spotify!",
          `[\`${artist} - ${name}\`](${url})`,
          false
        );
      message.channel.send(spotifyEmbed);
    }


}}
