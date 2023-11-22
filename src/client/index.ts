import "dotenv/config";
import { Client, Collection, GatewayIntentBits } from "discord.js";
import {Command, Config, Event} from "../interfaces"
import { config } from "../env";
import { join } from "path";
import { readdirSync } from "fs";

export class ClientExtension extends Client {
    constructor(){
        super({
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.MessageContent,
                GatewayIntentBits.GuildVoiceStates
            ]
        })
    }
    public commands: Collection<string, Command> = new Collection();
    // public events: Collection<string, Event> = new Collection();
    public aliases: Collection<string, Command> = new Collection();
    public config: Config = config;

    public async init(){
        this.login(this.config.token);
        // Commands
        const commandPath = join(__dirname, "..", "commands")
        readdirSync(commandPath).forEach((dir)=>{
            const commands = readdirSync(`${commandPath}/${dir}`).filter((file)=>file.endsWith(".ts"));
            for(const file in commands){
                // import {command} from "../commands/commands.ts"
                const {command} = require(`${commandPath}/${dir}/${commands[file]}`);
                this.commands.set(command.name, command as Command);
                if(command?.aliases.length !== 0){
                    command.aliases.forEach((alias: any)=>{
                        this.aliases.set(alias, command);
                    })
                }
            }
        })
        // Events
        const eventPath = join(__dirname, "..", "events")
        readdirSync(eventPath).forEach(async (file)=>{
            let {event}: {event: Event} = await import(`${eventPath}/${file}`);
            if (event.once) {
                this.once(event.name, (...args) => event.run(this, ...args));
            } else {
                this.on(event.name, (...args) => event.run(this, ...args));
            }
        })
    }
}