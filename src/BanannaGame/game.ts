import { Player } from "./player";

export class Games{
    constructor(
        public player1: Player,
        public player2: Player,
        private round: number = 1,
        private turn: number = 1,
        public turnOwner: string = "",
    ){}

    public start(){
        this.selectPlayerTurn();
        this.player1.shuffleDeck();
        this.player2.shuffleDeck();
        for (let i = 0; i < 5; i++) {
            this.player1.drawCard();
            this.player2.drawCard();
        }
        this.player1.addMana(1);
        this.player2.addMana(1);
    }

    public nextTurn(){
        if(this.turnOwner == this.player1.name){
            this.turnOwner = this.player2.name;
        }else{
            this.turnOwner = this.player1.name;
        }
        if(this.turn % 2 == 0){
            this.round++;
            this.player1.addMana(this.round);
            this.player2.addMana(this.round);
            if(this.turnOwner == this.player1.name){
                this.player1.drawCard();
            }else{
                this.player2.drawCard();
            }
        }
        this.turn++;
    }

    public attack(attacker: number, target: number){
        const minionAttacker = this.turnOwner == this.player1.name ? this.player1.field[attacker] : this.player2.field[attacker];
        const minionTarget = this.turnOwner == this.player1.name ? this.player2.field[target] : this.player1.field[target];

        if(minionAttacker == null || minionTarget == null){
            return;
        }

        minionTarget.def -= minionAttacker.atk;
        minionAttacker.def -= minionTarget.atk;

        if(minionAttacker.def <= 0){
            this.turnOwner == this.player1.name ? this.player1.field[attacker] = null : this.player2.field[attacker] = null;
        }
        if(minionTarget.def <= 0){
            this.turnOwner == this.player1.name ? this.player2.field[target] = null : this.player1.field[target] = null;
        }
    }

    private selectPlayerTurn(){
        const coin = Math.floor(Math.random() * 2);
        if(coin === 0){
            this.turnOwner = this.player1.name;
        } else {
            this.turnOwner = this.player2.name;
        }

    }

}