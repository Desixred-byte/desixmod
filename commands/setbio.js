const { Client, Message, MessageEmbed } = require("discord.js");
const Schema = require(`../schema/bioSchema`);
module.exports = {
	name: "setbio",
	/**
	 * @param {Client} client
	 * @param {Message} message
	 * @param {String[]} args
	 */
	run: async (client, message, args) => {
		if (!args.join(" ")) return message.reply(
			new MessageEmbed()
				.setTitle("Error Usage")
				.setDescription(`Usage: ${client.prefix}setbio <bio>`)
		)
		Schema.findOne({ User: message.author.id }, async (err, data) => {
			if (data) data.delete();
			new Schema({
				User: message.author.id,
				Bio: args.join(" ")
			}).save();
		})
		message.reply(
			`Successfully Updated Your Bio`
		)
	}
}