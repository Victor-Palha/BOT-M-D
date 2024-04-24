import { Command } from "../../interfaces";
import { GAME } from "../..";
import { infoEmbed } from "../../BanannaGame/infoEmbed";
import { EmbedBuilder } from "discord.js";

export const command: Command = {
    name: "graveBananna",
    description: "Show the graveyard of the game",
    aliases: ["grave"],
    run: async (client, message, _args) => {

        let roger_grave = GAME.player2.graveyard.map((card, index) => `[${card.name}] - [${index}]`).join("\n")
        let victor_grave = GAME.player1.graveyard.map((card, index) => `[${card.name}] - [${index}]`).join("\n")
        
        if(roger_grave === "") roger_grave = "Empty"
        if(victor_grave === "") victor_grave = "Empty"

        const embed = new EmbedBuilder()
            .setTitle("Roger Graveyard")
            .setFields([
                {
                    name: "🪦",
                    value: roger_grave
                }
            ])
        
        const embed2 = new EmbedBuilder()
            .setTitle("Victor Gaveyard")
            .setFields([
                {
                    name: "🪦",
                    value: victor_grave
                }
            ])

        message.channel.send({
            embeds: [embed, embed2]
        })
    }
}