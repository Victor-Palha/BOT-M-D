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
            this.player1.drawCard();
            this.player2.drawCard();
        }
        this.turn++;
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