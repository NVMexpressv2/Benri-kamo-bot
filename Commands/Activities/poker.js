const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "poker",
    description: "Discordでポーカーをプレイします。",
    run: async(client, message, args) => {

      if (!message.member.voice.channelId) {
        return message.channel.send('最初に音声チャンネルに参加する必要があります！')
      }
        client.discordTogether.createTogetherCode(message.member.voice.channelId, 'poker').then(async(invite) => {
            
            let embed = new MessageEmbed()
            .setTitle("Poker.io")
            .setDescription(`[Click Here](${invite.code}) to play Poker.io!\n\`\`\`\nNote: This feature is not availble for mobile users!\`\`\``)
            .setColor("GREEN")
            .setFooter(`Requested By: ${message.author.tag}`)
            
            return message.channel.send({ embeds: [embed] });
        });
    }
}