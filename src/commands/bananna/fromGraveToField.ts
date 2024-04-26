import { Command } from "../../interfaces";
import { GAME } from "../..";
import { infoEmbed } from "../../BanannaGame/infoEmbed";

export const command: Command = {
    name: "fromgrave",
    description: "Summon a card from the graveyard to the field args: [index_field_to_summon] [index_card_in_grave] examplo: !fromgrave 0 0",
    aliases: ["fg"],
    run: async (client, message, args) => {
        const index_field_to_summon = parseInt(args[0])
        const index_card_in_grave = parseInt(args[1])

        message.channel.send(`Summoning card from graveyard to field ${index_field_to_summon}`)

        const turnOwner = GAME.turnOwner
        const player = turnOwner === "Victor" ? GAME.player1 : GAME.player2
        player.summonFromGraveyard(index_field_to_summon, index_card_in_grave)

        message.channel.send({
            embeds: infoEmbed(GAME.player1, GAME.player2, GAME.turnOwner)
        })
    }
}