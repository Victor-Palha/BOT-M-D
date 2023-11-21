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

        message.channel.send(JSON.stringify(commands, null, 2))
    }
}