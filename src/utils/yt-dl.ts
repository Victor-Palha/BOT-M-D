import { AudioPlayer, VoiceConnection, createAudioResource, joinVoiceChannel } from "@discordjs/voice";
import { InternalDiscordGatewayAdapterCreator, Message } from "discord.js";
import { downloadFromYoutube } from "./download-from-youtube";

interface MusicPlayerProps {
    url: string;
    message: Message;
}
interface ListernsProps {
    channelId: string;
    musics: string[];
    connection: VoiceConnection;
}

export class MusicPlayer{
    listeners: ListernsProps[] = []

    async Player({url, message}: MusicPlayerProps){
        /* Get User Props */
        const channel = message.member?.voice.channel?.id
        if(!channel) throw new Error("You must be in a voice channel to use this command");

        /* Download from Youtube */
        var path = ""
        await downloadFromYoutube(url).then((response)=>{
            path = response.path
        })

        /* Verify if exists others musisc on queue */
        const seachChannel = this.listeners.find((listener)=>listener.channelId === channel)

        if(seachChannel){
            seachChannel.musics.push(path)

        }
        else{
            this.listeners.push({
                channelId: channel,
                musics: [path],
                connection: joinVoiceChannel({
                    channelId: channel,
                    guildId: message.member?.voice.guild.id as string,
                    adapterCreator: message.member?.voice.guild.voiceAdapterCreator as InternalDiscordGatewayAdapterCreator
                })
            })
        }

        return {
            play: (player: AudioPlayer)=>{
                const seachChannel = this.listeners.find((listener)=>listener.channelId === channel)
                if(seachChannel){
                    const resource = createAudioResource(path)
                    player.play(resource)
                    player
                    seachChannel.connection.subscribe(player)
                }
            },
        }
    }

    async Stop(channelId: string){
        const seachChannel = this.listeners.find((listener)=>listener.channelId === channelId)
        if(seachChannel){
            seachChannel.connection.destroy()
        }else{
            throw new Error("You must be in a voice channel to use this command");
        }
    }

    async Queue(channelId: string){
        const seachChannel = this.listeners.find((listener)=>listener.channelId === channelId)
        if(seachChannel){
            return seachChannel.musics
        }else{
            throw new Error("You must be in a voice channel to use this command");
        }
    }
}

export const musicPlayer = new MusicPlayer();