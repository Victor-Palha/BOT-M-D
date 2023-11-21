import { Command } from "../../interfaces";
import { musicPlayer } from "../../utils/yt-dl";

export const command: Command = {
    name: "stop",
    description: "Stop the music",
    aliases: ["s"],
    run: async (client, message, args)=>{
        await musicPlayer.Stop(message.member?.voice.channel?.id as string).then((res)=>{
            message.channel.send("Stopped")
        }).catch((error)=>{
            message.channel.send(error.message)
        })
    }
}