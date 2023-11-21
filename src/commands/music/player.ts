import {joinVoiceChannel, createAudioPlayer, createAudioResource} from "@discordjs/voice";
import { Command } from "../../interfaces";
import {musicPlayer} from "../../utils/yt-dl";
// import { downloadVideo } from "../../utils/yt-dl";
export const command: Command = {
    name: "play",
    description: "Play a song from youtube",
    aliases: ["p"],
    run: async (client, message, args)=>{
        // const channel = message.member?.voice;
        // if(!channel?.channelId) return message.channel.send("You must be in a voice channel to use this command");
        // const url = args[0];
        // if(!url) return message.channel.send("Please specify a url");

        // const videoReponse = await downloadVideo(url);

        // if(!videoReponse) return message.channel.send("Something went wrong");

        // const connection = joinVoiceChannel({
        //     channelId: channel.channelId,
        //     guildId: channel.guild.id,
        //     adapterCreator: channel.guild.voiceAdapterCreator
        // })

        // const player = createAudioPlayer();
        // const resource = createAudioResource(videoReponse.videoPath);
        // player.play(resource);
        // connection.subscribe(player);
        musicPlayer.Player({url: args[0], message}).then((response)=>{
            response.play(createAudioPlayer())
        }).catch((error)=>{
            message.channel.send(error.message)
        })
    }
}