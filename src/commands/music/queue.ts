import { Command } from "../../interfaces";
import { musicPlayer } from "../../utils/yt-dl";

export const command: Command = {
    name: "queue",
    description: "Show the queue",
    aliases: ["q"],
    run: async (client, message, args)=>{
        await musicPlayer.Queue(message.member?.voice.channel?.id as string).then((res)=>{
            message.channel.send(res.join("\n"))
        }).catch((error)=>{
            message.channel.send(error.message)
        })
    }
}