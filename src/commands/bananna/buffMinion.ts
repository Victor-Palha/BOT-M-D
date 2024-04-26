import { Command } from "../../interfaces";
import { GAME } from "../..";

export const command: Command = {
    name: "buffminion",
    description: "Buff your minion attack buffm [index_field_minion] [buff] ex: !buffm 3 1",
    aliases: ["buffm"],
    run: async (_client, message, args) => {
        const index_field = parseInt(args[0])
        const buff = parseInt(args[1])
        const player = GAME.turnOwner === "Victor" ? GAME.player1 : GAME.player2
        
        player.buffMinion(index_field, buff)

        message.channel.send(`You buffed your minion atk with +${buff}`)
    }
}