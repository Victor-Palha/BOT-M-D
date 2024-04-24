import { Command } from "../../interfaces";
import { GAME } from "../..";
import { infoEmbed } from "../../BanannaGame/infoEmbed";

export const command: Command = {
    name: "passBananna",
    description: "Pass the turn in Bananna Game",
    aliases: ["pass"],
    run: async (client, message, _args) => {

        GAME.nextTurn();

        message.channel.send({
            embeds: infoEmbed(GAME.player1, GAME.player2, GAME.turnOwner)
        })
    }
}