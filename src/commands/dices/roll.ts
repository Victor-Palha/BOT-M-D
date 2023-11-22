import { EmbedBuilder } from "discord.js";
import { Command } from "../../interfaces";
import { RollDice } from "../../utils/RollDice";

export const command: Command = {
    name: "roll",
    description: "Roll a dice",
    aliases: ["r"],
    run: async (client, message, args) => {
        message.channel.send("Rolling a dice...");
        var modifierType: "plus" | "minus" | undefined = undefined;
        var modifier: number | undefined = undefined;
        if(args[0].includes("+")){
            modifierType = "plus";
            modifier = parseInt(args[0].split("+")[1]);
        }else if(args[0].includes("-")){
            modifierType = "minus";
            modifier = parseInt(args[0].split("-")[1]);
        }
        var amount: number = parseInt(args[0].split("d")[0]);
        var dice: number = parseInt(args[0].split("d")[1]);
        
        if(amount > 100 || amount < 1) return message.channel.send("You can't roll that amount of dices");


        const {dices, total, criticals, criticalsError} = RollDice({amount, dice, modifier, modifierType});

        const embed = new EmbedBuilder()
            .setTitle("Monkeys & Dungeons Roll Dice")
            .setDescription(`You rolled ${args[0]}`)
            .setTimestamp(new Date())
            .setFields([
                {
                    name: "Dices",
                    value: dices.join(", ")
                },
                {
                    name: "Total",
                    value: total.toString()
                },{
                    name: "Criticals",
                    value: criticals.toString()
                },{
                    name: "Criticals Error",
                    value: criticalsError.toString()
                }
            ])

        message.channel.send({
            embeds: [embed]
        })
    }
}