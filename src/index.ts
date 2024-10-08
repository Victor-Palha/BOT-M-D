import { ClientExtension } from "./client";

const client = new ClientExtension();

client.init().then(()=>{
    // console.dirxml(client.commands)
    // console.log(client.events)
    // console.dirxml(client.aliases)
}).catch((err)=>{
    console.log(err)
})