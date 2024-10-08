import {createAudioPlayer} from "@discordjs/voice";
import { Command } from "../../interfaces";
import {musicPlayer} from "../../utils/MusicPlayer";
import { TextChannel } from "discord.js";

export const command: Command = {
    name: "play",
    description: "Play a song from youtube by url example: !play https://www.youtube.com/watch?v=5qap5aO4i9A",
    aliases: ["p"],

    run: async (client, message, args)=>{
        const channel = message.channel as TextChannel;
        if(!args[0]){
            channel.send("You need to provide a url to play a song")
            return
        }
        channel.send("Downloading the song, please wait a moment...")
        musicPlayer.Player({url: args[0], message})
            .then((response)=>{
                if(response.play){
                    response.play(createAudioPlayer())
                }
            })
            .catch((error)=>{
                const channel = message.channel as TextChannel;
                channel.send(error.message)
            })
    }
}
