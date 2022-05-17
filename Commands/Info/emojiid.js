const Discord = module.require("discord.js");

module.exports = {
  name: "emojiid",
  description: "絵文字のIDを取得します。",
  run: async (client, message, args) => {
    const name = args.join(" ");
    const emoji = message.guild.emojis.cache.find((r) => r.name === name);
    if (!name) {
      return message.channel.send("絵文字名を入力してください。");
    }
    if (!emoji) {
      return message.channel.send(
        "指定された名前の絵文字が見つかりませんでした。 絵文字の名前が正しいことを確認してください。"
      );
    }
    new message.channel.send(`\`\`\`${emoji}\`\`\``);
  },
};
