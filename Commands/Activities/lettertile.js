const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "lettertile",
    description: "Discordでlettertile.ioを再生します。",
    run: async(client, message, args) => {

      if (!message.member.voice.channelId) {
        return message.channel.send('最初に音声チャンネルに参加する必要があります！')
      }
        client.discordTogether.createTogetherCode(message.member.voice.channelId, 'lettertile').then(async(invite) => {
            
            let embed = new MessageEmbed()
            .setTitle("LetterTile.io")
            .setDescription(`[Click Here](${invite.code}) to play LetterTile.io!\n\`\`\`\nNote: This feature is not availble for mobile users!\`\`\``)
            .setColor("GREEN")
            .setFooter(`Requested By: ${message.author.tag}`)
            
            return message.channel.send({ embeds: [embed] });
        });
    }
}