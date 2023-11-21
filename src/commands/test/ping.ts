import { Command } from "../../interfaces";

export const command: Command = {
    name: "ping",
    description: "Ping!",
    aliases: ["p"],
    run: async (client, message, args) => {
        await message.channel.send(`${client.ws.ping}ms`);
    }
}