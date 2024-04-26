import { Command } from "../../interfaces";
import { GAME } from "../..";
import { infoEmbed } from "../../BanannaGame/infoEmbed";

export const command: Command = {
    name: "info",
    description: "Return the resume of the game",
    aliases: ["info"],
    run: async (client, message, _args) => {
        message.channel.send({
            embeds: infoEmbed(GAME.player1, GAME.player2, GAME.turnOwner)
        })
    }
}