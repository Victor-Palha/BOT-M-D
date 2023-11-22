import { createAudioPlayer } from "@discordjs/voice"
import { Command } from "../../interfaces"
import { musicPlayer } from "../../utils/MusicPlayer"

export const command: Command = {
    name: "skip",
    description: "Skip the current song",
    aliases: ["sk"],
    run: async (client, message, args)=>{
        await musicPlayer.Skip({
            channelId: message.member?.voice.channel?.id as string,
            player: createAudioPlayer()
        })
        .catch((error)=>{
            message.channel.send(error.message)
        })
    }
}