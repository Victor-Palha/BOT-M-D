import { Command } from "../../interfaces";
import { GAME } from "../..";
import { infoEmbed } from "../../BanannaGame/infoEmbed";

export const command: Command = {
    name: "token",
    description: "Summon a token on the field args: [index_field_to_summon] [atk] [def] [name] examplo: !token 0 1 1 zumbi",
    aliases: ["token"],
    run: async (client, message, args) => {
        const index_field_to_summon = parseInt(args[0])
        const atk = parseInt(args[1])
        const def = parseInt(args[2])
        const name = args[3]

        message.channel.send(`Summoning token on field ${name} - ${atk}/${def} `)

        const turnOwner = GAME.turnOwner
        const player = turnOwner === "Victor" ? GAME.player1 : GAME.player2
        
        const Token = {
            id: 999,
            name: name,
            atk: atk,
            def: def,
            effect: "This is a Token",
            type: "minion" as const,
            cost: 0,
        }

        player.summonToken(Token, index_field_to_summon)

        message.channel.send({
            embeds: infoEmbed(GAME.player1, GAME.player2, GAME.turnOwner)
        })
    }
}