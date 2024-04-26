import { Command } from "../../interfaces";
import { GAME } from "../..";

export const command: Command = {
    name: "attack",
    description: "Cause damage to the enemy ex: !attack 10",
    aliases: ["attack"],
    run: async (_client, message, args) => {
        const damage = parseInt(args[0])
        const enemy = GAME.turnOwner === "Victor" ? GAME.player2 : GAME.player1
        
        enemy.receiveDamage(damage)
        message.channel.send(`You caused ${damage} damage to the enemy`)
    }
}