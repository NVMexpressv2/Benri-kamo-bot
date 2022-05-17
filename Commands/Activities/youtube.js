const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "youtube",
    description: "Discordの中でYoutubeを見てください！",
    run: async(client, message, args) => {

      if (!message.member.voice.channelId) {
        return message.channel.send('最初に音声チャンネルに参加する必要があります！')
      }
        client.discordTogether.createTogetherCode(message.member.voice.channelId, 'youtubeDev').then(async(invite) => {
            
            let embed = new MessageEmbed()
            .setTitle("Youtube Together")
            .setDescription(`[Click Here](${invite.code}) to access Youtube Together!\n\`\`\`\nNote: This feature is not availble for mobile users!\`\`\``)
            .setColor("RED")
            .setFooter(`Requested By: ${message.author.tag}`)
            
            return message.channel.send({ embeds: [embed] });
        });
    }
}