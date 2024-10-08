import { TextChannel } from "discord.js";
import { Command } from "../../interfaces";
import { musicPlayer } from "../../utils/MusicPlayer";

export const command: Command = {
    name: "stop",
    description: "Stop the current song and clear the queue",
    aliases: ["st"],
    run: async (client, message, args)=>{
        const channel = message.channel as TextChannel;
        await musicPlayer.Stop(message.member?.voice.channel?.id as string).then((res)=>{
            channel.send("Stopped")
        }).catch((error)=>{
            channel.send(error.message)
        })
    }
}