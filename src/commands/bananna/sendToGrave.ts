import { Command } from "../../interfaces";
import {GAME} from "../.."
export const command: Command = {
    name: "tograve",
    description: "Send a card from the field to the graveyard",
    aliases: ["tg"],
    run: async (_client, message, args) => {
        const index_from_field = parseInt(args[0])
        console.log(index_from_field)
        const player = GAME.turnOwner === "Victor" ? GAME.player1 : GAME.player2
        const card = player.field[index_from_field]

        if(!card) return message.channel.send("There is no card on that field")

        message.channel.send(`Sending the card ${card.name} to the graveyard`)
        player.sendToGraveyard(index_from_field)
    }
}