import { AudioPlayer, createAudioPlayer, createAudioResource, joinVoiceChannel } from "@discordjs/voice";
import { InternalDiscordGatewayAdapterCreator, Message } from "discord.js";
import youtubedl from "youtube-dl-exec"

interface MusicPlayerProps {
    url: string;
    message: Message;
}
interface ListernsProps {
    channelId: string;
    musics: string[];
}

export class MusicPlayer{
    listeners: ListernsProps[] = []

    async Player({url, message}: MusicPlayerProps){
        /* Get User Props */
        const channel = message.member?.voice.channel?.id
        if(!channel) throw new Error("You must be in a voice channel to use this command");
        /* Download Music */
        const staticPath = __dirname + "/../musics"
        const hashTitle = url.split("v=")[1]
        try {
            await youtubedl(url, {
                format: "bestaudio/best",
                noCheckCertificates: true,
                noWarnings: true,
                preferFreeFormats: true,
                addHeader: ['referer:youtube.com', 'user-agent:googlebot'],
                output: staticPath + `/${hashTitle}.%(ext)s`,
            })
            // DISCORD_TOKEN="ODYxNjcyODkxMDQwNzkyNTc2.Gw6Ilx.gD62hYm2BrV5I7ttXBCqFKqrYaEBzSUFaKxR1Q"

            // console.log(response)
            
            const seachChannel = this.listeners.find((listener)=>listener.channelId === channel)
            if(seachChannel){
                seachChannel.musics.push(staticPath + `/${hashTitle}.webm`)
            }
            else{
                this.listeners.push({
                    channelId: channel,
                    musics: [staticPath + `/${hashTitle}.webm`]
                })
            }
        } catch (error) {
            console.log(error)
        }
        return {
            play: (player: AudioPlayer) => {
                const connection = joinVoiceChannel({
                    channelId: channel,
                    guildId: message.member?.voice.guild.id as string,
                    adapterCreator: message.member?.voice.guild.voiceAdapterCreator as InternalDiscordGatewayAdapterCreator
                })
                const resource = createAudioResource(staticPath + `/${hashTitle}.webm`);
                player.play(resource);
                connection.subscribe(player);
            }
        }
    }
}

export const musicPlayer = new MusicPlayer();