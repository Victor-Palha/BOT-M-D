import { EmbedBuilder } from "discord.js";
import { Command } from "../../interfaces";
import { GAME } from "../..";

export const command: Command = {
    name: "startBananna",
    description: "Start Bananna Card",
    aliases: ["start"],
    run: async (_client, message, _args) => {
        message.channel.send("Starting Bananna Game...");
        GAME.start()

        const roger_hand = GAME.player2.hand.map((card, index) => `${card.name} - [${index}] - ${card.cost} 💧`).join("\n")
        const roger_field = "[0], [1], [2], [3], [4], [5]"
        /**-=-=--=-= */
        const victor_hand = GAME.player1.hand.map((card, index) => `${card.name} - [${index}] - ${card.cost} 💧`).join("\n")
        const victor_field = "[0], [1], [2], [3], [4], [5]"

        const embed = new EmbedBuilder()
            .setTitle("Roger Hand")
            .setDescription(`Roger has ${GAME.player2.mana} mana and ${GAME.player2.spellMana} spell mana - HP: ${GAME.player2.hp} ♥️`)
            .setFields([
                {
                    name: "Hand",
                    value: roger_hand
                },
                {
                    name: "Field",
                    value: `${roger_field}`
                }
            ])
        
        const embedField = new EmbedBuilder()
            .setTitle("Turn")
            .setDescription(`Turn: ${GAME.turnOwner}`)
        const embed2 = new EmbedBuilder()
            .setTitle("Victor Hand")
            .setDescription(`Victor has ${GAME.player1.mana} mana and ${GAME.player1.spellMana} spell mana - HP: ${GAME.player1.hp} ♥️`)
            .setFields([
                {
                    name: "Field",
                    value: victor_field
                },
                {
                    name: "Hand",
                    value: victor_hand
                }
            ])

        message.channel.send({
            embeds: [embed, embedField, embed2]
        })
    }
}