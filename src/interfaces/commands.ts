import { Client, Message } from "discord.js";

interface RunCommand {
    (client: Client, message: Message, args: string[]): any
}

export interface Command {
    name: string,
    description?: string,
    aliases?: string[],
    run: RunCommand
}