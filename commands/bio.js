const { Client, Message, MessageEmbed } = require('discord.js');
const Schema = require(`../schema/bioSchema`);

module.exports = {
	name: 'bio',
	/**
	 * @param {Client} client
	 * @param {Message} message
	 * @param {String[]} args
	 */
     run: async({ message, args, client, handler }) => {
		let member = message.mentions.members.first();
		if (!member) {
			member = message.member;
		}
		let data = await Schema.findOne({ User: member.id });
		if (!data) {
			return message.reply(
				new MessageEmbed({
					title: 'Error 404',
					description: `${member.toString()} don't have a bio`
				})
			);
		}
		message.reply(
			new MessageEmbed()
				.setTitle(`${member.user.tag}'s Bio`)
				.setDescription(data.Bio)
				.setColor(client.color)
				.setFooter(`Use \`${client.prefix}setbio <bio>\` to set your bio`)
				.setThumbnail(member.user.displayAvatarURL({ dynamicdy: true }))
		);
	}
};