import { EmbedBuilder, TextChannel } from "discord.js";
import { Command } from "../../interfaces";
import { musicPlayer } from "../../utils/MusicPlayer";

export const command: Command = {
    name: "queue",
    description: "Show the queue from the music player",
    aliases: ["q"],
    run: async (client, message, args)=>{
        const channel = message.channel as TextChannel;
        await musicPlayer.Queue(message.member?.voice.channel?.id as string).then((res)=>{
            const embed = new EmbedBuilder()
                .setTitle("Monkeys & Dungeons")
                .setDescription("Queue")
                .setImage(message.guild?.iconURL() as string)
                .setTimestamp(new Date())
                .setFields(res.map((music, index)=>({
                    name: `${index+1}`,
                    value: music.url
                })))

            channel.send({
                embeds: [embed]
            })
        }).catch((error)=>{

            channel.send(error.message)
        })
    }
}