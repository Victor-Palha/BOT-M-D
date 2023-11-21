import youtubeDl from "youtube-dl-exec";

export async function downloadFromYoutube(url: string){
    const staticPath = __dirname + "/../musics"
    const hashTitle = url.split("v=")[1]

    await youtubeDl(url, {
        format: "bestaudio/best",
        noCheckCertificates: true,
        noWarnings: true,
        preferFreeFormats: true,
        addHeader: ['referer:youtube.com', 'user-agent:googlebot'],
        output: staticPath + `/${hashTitle}.%(ext)s`,
    })

    return {
        path: staticPath + `/${hashTitle}.webm`
    }
}