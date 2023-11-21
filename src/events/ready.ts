import { Event } from "../interfaces";

export const event: Event = {
    name: "ready",
    once: true,
    run:(client) => {
        console.log(`${client.user?.tag} is ready! 🚀`);
    }
}