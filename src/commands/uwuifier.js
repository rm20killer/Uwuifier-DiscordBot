const { SlashCommandBuilder } = require("@discordjs/builders");
const { Uwuifier } = require('@patarapolw/uwuifier');

module.exports = {

    data: new SlashCommandBuilder()
    .setName("uwuifier")
    .setDescription("uwuifier a text")
    .addStringOption(option =>
        option.setName('text')
            .setDescription('enter the text to uwuifier')
            .setRequired(true)),

    
    async execute(interaction, client) {
        await interaction.deferReply();
        const uwuifier = new Uwuifier();
        let text = interaction.options.data[0]
        //console.log(interaction)
        let uwuifieredText = uwuifier.uwuifySentence(text.value)
        //console.log(uwuifieredText)

        await interaction.editReply({content: `${uwuifieredText}`});
    },
};
