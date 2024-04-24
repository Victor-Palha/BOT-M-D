import { Card } from "./intarfaces";

export class Player {
    constructor(
        public name: string,
        public deck: Card[],
        public hand: Card[],
        public field: Card[] | null[] = [null, null, null, null, null, null],
        public graveyard: Card[],
        public mana: number,
        public spellMana: number,
        public hp: 20
    ){}

    public shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }

    public drawCard() {
        if (this.deck.length === 0) {
            return;
        }
        const card = this.deck.pop();
        if(card){
            this.hand.push(card);
        }
    }

    public summon(index_card_in_hand: number, index_field_to_summon: number) {
        if (this.field[index_field_to_summon] !== null) {
            console.log(this.field[index_field_to_summon])
            return;
        }
        if(!this.hand[index_card_in_hand]) {
            console.log("Entrou 2")
            return;
        }
        const isMinionOrSpell = this.hand[index_card_in_hand].type

        if (isMinionOrSpell == "minion" && this.hand[index_card_in_hand].cost > this.mana) {
            console.log(this.hand[index_card_in_hand].cost, this.mana)
            return;
        }
        if(isMinionOrSpell == "spell" && this.hand[index_card_in_hand].cost > this.spellMana + this.mana){
            console.log(this.hand[index_card_in_hand].cost, this.spellMana + this.mana)
            return;
        }

        if(isMinionOrSpell == "spell"){
            this.mana -= this.hand[index_card_in_hand].cost;
            if(this.mana < 0){
                this.spellMana += this.mana;
                this.mana = 0;
            }
            this.sendToGraveyard(index_field_to_summon);
        }
        if(isMinionOrSpell == "minion"){
            this.mana -= this.hand[index_card_in_hand].cost;
            this.field[index_field_to_summon] = this.hand[index_card_in_hand];
        }
        
        this.hand.splice(index_card_in_hand, 1);
    }

    public sendToGraveyard(index_field: number) {
        if (!this.field[index_field]) {
            return;
        }
        this.graveyard.push(this.field[index_field] as Card);
        this.field[index_field] = null;
    }

    public addMana(turn: number) {
        const atualMana = this.mana;
        if(atualMana > 3){
            this.spellMana = 3;
        }else{
            this.spellMana = atualMana;
        }
        this.mana = turn;
    }
}