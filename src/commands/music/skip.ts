import { createAudioPlayer } from "@discordjs/voice"
import { Command } from "../../interfaces"
import { musicPlayer } from "../../utils/MusicPlayer"
import { TextChannel } from "discord.js"

export const command: Command = {
    name: "skip",
    description: "Skip the current song to the next one",
    aliases: ["sk"],
    run: async (client, message, args)=>{
        await musicPlayer.Skip({
            channelId: message.member?.voice.channel?.id as string,
            player: createAudioPlayer()
        })
        .catch((error)=>{
            const channel = message.channel as TextChannel;
            channel.send(error.message)
        })
    }
}