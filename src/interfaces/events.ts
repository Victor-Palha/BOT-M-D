import { ClientEvents } from "discord.js";
import { ClientExtension } from "../client";

interface Run{
    (client: ClientExtension, ...args: any[]): any
}

export interface Event{
    name: keyof ClientEvents,
    once?: boolean,
    run: Run
}