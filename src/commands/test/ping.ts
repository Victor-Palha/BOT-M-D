import { TextChannel } from "discord.js";
import { Command } from "../../interfaces";

export const command: Command = {
    name: "ping",
    description: "Ping!",
    aliases: ["pg"],
    run: async (client, message, args) => {
        const channel = message.channel as TextChannel;
        await channel.send(`${client.ws.ping}ms`);
    }
}