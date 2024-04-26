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
            this.field[index_field_to_summon] = this.hand[index_card_in_hand];
            this.sendToGraveyard(index_field_to_summon);
        }
        if(isMinionOrSpell == "minion"){
            this.mana -= this.hand[index_card_in_hand].cost;
            this.field[index_field_to_summon] = this.hand[index_card_in_hand];
        }
        
        this.hand.splice(index_card_in_hand, 1);
    }

    public summonFromGraveyard(index_field_to_summon: number, index_card_in_grave: number) {
        if (this.field[index_field_to_summon] !== null) {
            return;
        }
        if(!this.graveyard[index_card_in_grave]) {
            return;
        }
        
        this.field[index_field_to_summon] = this.graveyard[index_card_in_grave];
        this.graveyard.splice(index_card_in_grave, 1);
    }

    public sendToGraveyard(index_field: number) {
        if (!this.field[index_field]) {
            console.log("Entrou")
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
            this.spellMana = this.spellMana + atualMana;
        }
        this.mana = turn;
    }

    public receiveDamage(damage: number) {
        this.hp -= damage;
    }

    public summonToken(token: Card, index_field: number){
        if (this.field[index_field] !== null) {
            return;
        }
        this.field[index_field] = token;
    }

    public deleteCard(index_field: number){
        this.field[index_field] = null;
    }

    public handToDeck(index_card_in_hand: number){
        if(!this.hand[index_card_in_hand]){
            return;
        }
        this.deck.push(this.hand[index_card_in_hand]);
        this.shuffleDeck();
        this.hand.splice(index_card_in_hand, 1);
    }

    public attackMinion(index_minion_field: number, damage: number){
        const card =this.field[index_minion_field]

        if(card === null){
            return;
        }

        card.def -= damage;
    }

    public buffMinion(index_minion_field: number, buff: number){
        const card = this.field[index_minion_field]

        if(card === null){
            return;
        }

        card.atk += buff;
    }
}