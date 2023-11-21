import { Client, Message } from "discord.js";
import { ClientExtension } from "../client";

interface RunCommand {
    (client: ClientExtension, message: Message, args: string[]): any
}

export interface Command{
    name: string,
    description?: string,
    aliases?: string[],
    run: RunCommand
}