export interface Card {
    id: number;
    name: string;
    effect: string;
    type: "spell" | "minion"
    cost: number;
    atk: number;
    def: number;
}

export interface Minion extends Card {}

export interface Magia extends Card {}