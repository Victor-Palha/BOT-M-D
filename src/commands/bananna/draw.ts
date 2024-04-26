import { Command } from "../../interfaces";
import {GAME} from "../.."
export const command: Command = {
    name: "draw",
    description: "Draw a card from the deck",
    aliases: ["draw"],
    run: async (_client, message, _args) => {
        const player = GAME.turnOwner === "Victor" ? GAME.player1 : GAME.player2

        player.drawCard()

        message.channel.send(`You Draw a Card!`)
    }
}