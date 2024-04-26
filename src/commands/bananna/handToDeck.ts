import { Command } from "../../interfaces";
import {GAME} from "../.."
export const command: Command = {
    name: "handtodeck",
    description: "Send a card from the hand to the deck",
    aliases: ["hd"],
    run: async (_client, message, args) => {
        const player = GAME.turnOwner === "Victor" ? GAME.player1 : GAME.player2
        const index_hand = parseInt(args[0])
        const card = player.hand[index_hand]
        if(!card) return message.channel.send("There is no card on that hand")
        
        player.handToDeck(index_hand)

        message.channel.send(`You send a card from your hand to the deck!`)
    }
}