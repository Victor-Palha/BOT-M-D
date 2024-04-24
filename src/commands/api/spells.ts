import { EmbedBuilder } from "@discordjs/builders";
import { Command } from "../../interfaces";

type Spells = {
    id: string;
    name: string;
    source: string;
    level: number;
    ritual: boolean;
    concentration: boolean;
    classes: string[];
    school: string;
}
export const command:Command = {
    name: "spells",
    description: "Returns a list of spells",
    aliases: ["spell"],
    run: async (client, message, args) => {
        const embed = new EmbedBuilder()
            .setTitle("Spells")
            .setDescription("A list of spells")
            .setTimestamp();

        let spells: Spells[] = await fetch("http://localhost:5000/api/spells")
            .then(res => {
                if (res.ok) return res.json();
                else throw new Error(res.statusText);
            });
        // spells.slice(0, 5);
        // console.log(spells)
        spells.forEach(spell => {
            embed.addFields({
                name: spell.name,
                value: `**Level:** ${spell.level}\n**Ritual:** ${spell.ritual}\n**Concentration:** ${spell.concentration}\n**Classes:** ${spell.classes.join(", ")}\n**School:** ${spell.school}`
            });
        })

        message.reply({ embeds: [embed] });
    }
}