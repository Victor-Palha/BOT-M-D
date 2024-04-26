import { Command } from "../../interfaces";
import { GAME } from "../..";

export const command: Command = {
    name: "attackminion",
    description: "Cause damage to the enemy minion atkm [index_field_enemy] [damage] ex: !atkm 3 1",
    aliases: ["atkm"],
    run: async (_client, message, args) => {
        const index_field = parseInt(args[0])
        const damage = parseInt(args[1])
        const enemy = GAME.turnOwner === "Victor" ? GAME.player2 : GAME.player1
        
        enemy.attackMinion(index_field, damage)

        message.channel.send(`You caused ${damage} damage to the enemy minion`)
    }
}