import { Command } from "../../interfaces";
import {GAME} from "../.."
export const command: Command = {
    name: "damage",
    description: "Receive Damage in Avatar",
    aliases: ["dmg"],
    run: async (_client, message, args) => {
        const damage = parseInt(args[0])

        const player = GAME.turnOwner === "Victor" ? GAME.player1 : GAME.player2

        player.receiveDamage(damage)

        message.channel.send(`You received ${damage} damage!`)
    }
}