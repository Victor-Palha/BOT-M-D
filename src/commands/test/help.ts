import { EmbedBuilder } from "discord.js";
import { Command } from "../../interfaces";

export const command: Command = {
    name: "help",
    description: "Show the help menu",
    aliases: ["h"],
    run: async (client, message, args)=>{
        const commands = client.commands.map((command)=>{
            return {
                name: command.name,
                description: command.description,
                aliases: command.aliases
            }
        })
        const embed = new EmbedBuilder()
            .setTitle("Monkeys & Dungeons: DM, Help!")
            .setDescription("Help Menu")
            .setImage(message.guild?.iconURL() as string)
            .setTimestamp(new Date())
            .setFields(commands.map((command)=>({
                name: `!${command.name}`,
                value: command.description
            })))

        message.channel.send({
            embeds: [embed]
        })
    }
}