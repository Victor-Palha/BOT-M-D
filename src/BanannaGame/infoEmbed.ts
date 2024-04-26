import { EmbedBuilder } from "discord.js";
import { Player } from "./player";

export function infoEmbed(playerOne: Player, playerTwo: Player, turnOwner: string){

    const roger_hand = playerTwo.hand.map((card, index) => `${card.name} - [${index}] - ${card.cost} 💧`).join("\n")
    const roger_field = playerTwo.field.map((card, index) => card !== null ? `[${card.name} - ${card.atk}/${card.def}]`: `[${index}]`).join(", ")

    const victor_hand = playerOne.hand.map((card, index) => `${card.name} - [${index}] - ${card.cost} 💧`).join("\n")
    const victor_field = playerOne.field.map((card, index) => card !== null ? `[${card.name} - ${card.atk}/${card.def}]`: `[${index}]`).join(", ")

    const embed_player1 = new EmbedBuilder()
    .setTitle("Roger Hand")
    .setDescription(`Roger has ${playerTwo.mana} mana and ${playerTwo.spellMana} spell mana - HP: ${playerTwo.hp} ♥️`)
    .setFields([
        {
            name: "Hand",
            value: roger_hand
        },
        {
            name: "Field",
            value: roger_field
        }
    ])
    const embedField = new EmbedBuilder()
    .setTitle("Turn")
    .setDescription(`Turn: ${turnOwner}`)

    const embed_player2 = new EmbedBuilder()
    .setTitle("Victor Hand")
    .setDescription(`Victor has ${playerOne.mana} mana and ${playerOne.spellMana} spell mana - HP: ${playerOne.hp} ♥️`)
    .setFields([
        {
            name: "Field",
            value: victor_field
        },
        {
            name: "Hand",
            value: victor_hand
        }
    ])

    return [embed_player1, embedField, embed_player2]
}