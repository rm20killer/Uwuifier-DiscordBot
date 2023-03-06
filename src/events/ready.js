
const discord = require("discord.js");
const {ActivityType} = require('discord.js');


module.exports = {
	name: 'ready',
	execute(client) {
		console.log(`Logged In as ${client.user.tag}`);
	},
};