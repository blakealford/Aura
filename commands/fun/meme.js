const { MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");
var prefix = "a!" 
module.exports = {
  name: "meme",
  category: "fun",
  description: "Sends a meme from reddit)",
run: async (client, message, args) => {
  
  const res = await fetch(
    `https://www.reddit.com/r/memes.json?sort=top&t=week`
  );
  const { data } = await res.json();

  const safe = message.channel.nsfw
    ? data.children
    : data.children.filter((post) => !post.data.over_18);
  if (!safe.length)
    return message.channel.send(
      new MessageEmbed()
        .setColor("#3377de")
        .setDescription(`Couldn't get the post.`)
    );

  const post = safe[Math.floor(Math.random() * safe.length)];

  return message.channel.send(
    new MessageEmbed()
      .setColor("#3377de")
      .setAuthor(
        `${post.data.title}`,
        message.author.displayAvatarURL({ dynamic: true }),
        `https://reddit.com${post.data.permalink}`
      )
      .setImage(post.data.url)
      .setFooter(`👍 ${post.data.ups} | 💬 ${post.data.num_comments}`)
  );
}}