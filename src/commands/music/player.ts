import {createAudioPlayer} from "@discordjs/voice";
import { Command } from "../../interfaces";
import {musicPlayer} from "../../utils/MusicPlayer";

export const command: Command = {
    name: "play",
    description: "Play a song from youtube",
    aliases: ["p"],

    run: async (client, message, args)=>{
        musicPlayer.Player({url: args[0], message})
            .then((response)=>{
                if(response.play){
                    response.play(createAudioPlayer())
                }
            })
            .catch((error)=>{
                message.channel.send(error.message)
            })
    }
}
