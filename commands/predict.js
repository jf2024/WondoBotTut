const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("predict")
        .setDescription("Predict scores for the upcoming game!")
        .addIntegerOption(
            (
                option //first option to input
            ) =>
                option
                    .setName("home")
                    .setDescription("Guess how many goals home team will score")
                    .setRequired(true) //makes input required
        )
        .addIntegerOption(
            (
                option2 //second option to input
            ) =>
                option2
                    .setName("away")
                    .setDescription("Guess how many goals away team will score")
                    .setMinValue(0)
                    .setMaxValue(10)
                    .setRequired(true) //makes input required
        )
        .addStringOption(
            (
                option3 //third option to input
            ) =>
                option3
                    .setName("scorer")
                    .setDescription("Guess which SJ player will score first")
                    .setRequired(true) //makes input required
        ),

    async execute(interaction) {
        const home = interaction.options.getInteger("home");
        const away = interaction.options.getInteger("away");
        const scorer = interaction.options.getString("scorer");
        if (home && away && scorer) {
            return interaction.reply(
                `<@${interaction.user.id}> predication is as follows:\n Home team will score ${home} goals\n Away team will score ${away} goals\n First scorer is ${scorer}`
            );
        }
    },
};
