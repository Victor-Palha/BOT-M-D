import { Command } from "../../interfaces";
import { GAME } from "../..";
import { infoEmbed } from "../../BanannaGame/infoEmbed";

export const command: Command = {
    name: "setBananna",
    description: "Set a Card on Bananna Game args: [index_field_to_summon] [index_card_in_hand] examplo: !set 0 0",
    aliases: ["set"],
    run: async (client, message, args) => {
        const index_field_to_summon = parseInt(args[0])
        const index_card_in_hand = parseInt(args[1])

        message.channel.send(`Setting card on field ${index_field_to_summon} with card ${index_card_in_hand}`)

        const turnOwner = GAME.turnOwner
        const player = turnOwner === "Victor" ? GAME.player1 : GAME.player2
        player.summon(index_field_to_summon, index_card_in_hand)

        message.channel.send({
            embeds: infoEmbed(GAME.player1, GAME.player2, GAME.turnOwner)
        })
    }
}