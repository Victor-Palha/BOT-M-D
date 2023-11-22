import { AudioPlayer, VoiceConnection, createAudioResource, joinVoiceChannel } from "@discordjs/voice";
import { InternalDiscordGatewayAdapterCreator, Message } from "discord.js";
import { downloadFromYoutube } from "./download-from-youtube";
import { unlinkSync } from "fs";

interface MusicPlayerProps {
    url: string;
    message: Message;
}
interface ListernsProps {
    channelId: string;
    musics: MusicQueue[];
    connection: VoiceConnection;
}
interface MusicQueue {
    url: string;
    path: string;
}
type SkipProps = {
    channelId: string;
    player: AudioPlayer;
}

export class MusicPlayer{
    listeners: ListernsProps[] = []

    async Player({url, message}: MusicPlayerProps){
        // console.log(this.listeners)
        /* Get User Props */
        const channel = message.member?.voice.channel?.id
        if(!channel) throw new Error("You must be in a voice channel to use this command");

        /* Download from Youtube */
        var path = ""
        await downloadFromYoutube(url).then((response)=>{
            path = response.path,
            url = response.url
        })

        /* Verify if exists others musisc on queue */
        const seachChannel = this.listeners.find((listener)=>listener.channelId === channel)

        if(seachChannel){
            seachChannel.musics.push({
                url,
                path
            })

        }
        else{
            this.listeners.push({
                channelId: channel,
                musics: [{
                    path,
                    url
                }],
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
                    if(seachChannel.musics.length > 1) {
                        return
                    }
                    // Take the first music on queue
                    const resource = createAudioResource(seachChannel.musics[0].path)
                    player.play(resource)
                    // Event when the music is end
                    player.addListener("stateChange", (oldState, newState)=>{
                        if(newState.status === "idle"){
                            const lastSong = seachChannel.musics[0]
                            unlinkSync(lastSong.path)
                            seachChannel.musics.shift()
                            if(seachChannel.musics.length !== 0){
                                const resource = createAudioResource(seachChannel.musics[0].path)
                                player.play(resource)
                            }else{
                                seachChannel.connection.destroy()
                                this.listeners = this.listeners.filter((listener)=>{
                                    return listener.channelId !== channel
                                })
                            }
                        }
                    
                    })
                    // Subscribe the player on connection
                    seachChannel.connection.subscribe(player)
                }
            },
        }
    }

    async Stop(channelId: string){
        const seachChannel = this.listeners.find((listener)=>listener.channelId === channelId)
        if(seachChannel){
            seachChannel.connection.destroy()
            const deleteMusics = this.listeners.filter((listener)=>{
                return listener.channelId === channelId
            })
            this.listeners = this.listeners.filter((listener)=>{
                return listener.channelId !== channelId
            })
            deleteMusics[0].musics.map((music)=>{
                unlinkSync(music.path)
            })

        }else{
            throw new Error("You must be in a voice channel and have to be playing a music to use this command");
        }
    }

    async Queue(channelId: string){
        const seachChannel = this.listeners.find((listener)=>listener.channelId === channelId)
        if(seachChannel){
            return seachChannel.musics
        }else{
            throw new Error("You must be in a voice channel and have to be playing a music to use this command");
        }
    }

    async Skip({channelId, player}: SkipProps){
        const seachChannel = this.listeners.find((listener)=>listener.channelId === channelId)
        if(seachChannel){
            const nextSong = seachChannel.musics[1].path
            unlinkSync(seachChannel.musics[0].path)
            seachChannel.musics.shift()
            
            if(nextSong){
                const resource = createAudioResource(nextSong)
                player.play(resource)
                seachChannel.connection.subscribe(player)
            }

        }else{
            throw new Error("You must be in a voice channel and have to be playing a music to use this command");
        }
    
    }
}

export const musicPlayer = new MusicPlayer();