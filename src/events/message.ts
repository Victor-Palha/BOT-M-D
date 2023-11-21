import { Events, Message } from "discord.js";
import { Command, Event } from "../interfaces";

export const event: Event = {
    name: Events.MessageCreate,
    run: async (client, message: Message) => {
        // console.log(message.member?.voice.channel?.id)
        if(
            message.author.bot ||
            !message.guild ||
            !message.content.toLowerCase().startsWith(client.config.prefix)
        ) return;
    
        
        const args = message.content
            .slice(client.config.prefix.length)
            .trim()
            .split(/ +/g);
    
        const command = args.shift()?.toLowerCase();
        if(!command) return;
        const commandFile = client.commands.get(command) || client.aliases.get(command);
    
        if(commandFile){
            await (commandFile as Command).run(client, message, args)
        }
    }
}