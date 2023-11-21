import "dotenv/config";
import { z } from "zod";
import { Config } from "../interfaces";

const envSchema = z.object({
    DISCORD_TOKEN: z.string(),
    PREFIX: z.string(),
})

const _env = envSchema.safeParse(process.env);

if(!_env.success){
    throw new Error(_env.error.message)
}

export const config: Config = {
    prefix: process.env.PREFIX as string,
    token: process.env.DISCORD_TOKEN as string,
}