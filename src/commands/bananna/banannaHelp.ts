import { EmbedBuilder } from "@discordjs/builders";
import { Command } from "../../interfaces";

export const command: Command = {
    name: "banannahelp",
    description: "Bananna help",
    aliases: ["bhelp"],
    run: async (_client, message, _args) => {
        const embed = new EmbedBuilder()
        .setTitle("Bananna Help - How to Play")
        .setFields([
            {name: "Start Game", value: "To start a game, use the command !start"},
            {name: "Draw Card", value: "To draw a card, use the command !draw"},
            {name: "Summon Minion or Summon Spell", value: "To summon a minion or spell, use the command !summon <field_index> <card_in_hand_index>"},
            {name: "Pass Turn to Opponent", value: "To pass the turn to the opponent, use the command !pass"},
            {name: "Attack Opponent Minion", value: "To attack the opponent minion, use the command !attack <field_index_minion_opponent> <damage>"},
            {name: "Attack Opponent Direct", value: "To attack the opponent, use the command !dmg <damage>"},
            {name: "Info", value: "To get the resume of the game, use the command !info"},
            {name: "Buff your Minion", value: "To buff your minion, use the command !buffm <field_index> <value_to_buff_atk>"},
            {name: "Send your card to Graveyard", value: "To send your card to graveyard, use the command !tg <field_index>"},
            {name: "See your Graveyard", value: "To see your graveyard, use the command !grave"},
            {name: "Summon Minion from Graveyard", value: "To summon a minion from graveyard, use the command !fg <field_index> <grave_index>"},
            {name: "Hand to deck", value: "To send a card from hand to deck, use the command !hd <hand_index>"},
            {name: "Summon Token on Field", value: "To summon a token on field, use the command !token <field_index> <atk> <def> <name>"},
        ])

        message.channel.send({embeds: [embed]});
    }
}