type DiceProps = {
    amount: number;
    dice: number;
    modifier?: number;
    modifierType?: "plus" | "minus";
}
type RollDiceReturn = {
    dices: number[];
    total: number;
    advantage: number;
    disadvantage: number
}
export function RollDice({amount, dice, modifier, modifierType}: DiceProps): RollDiceReturn{
    var dices: number[] = [];
    var total: number = 0;
    var advantage: number = 0;
    var disadvantage: number = 0;
    for(let i = 0; i < amount; i++){
        const verify = Math.floor(Math.random() * dice) + 1;
        dices.push(Math.floor(verify));
    }
    if(modifier){
        if(modifierType === "plus"){
            total = dices.reduce((acc, cur)=>acc+cur) + modifier;
        }else if(modifierType === "minus"){
            total = dices.reduce((acc, cur)=>acc+cur) - modifier;
        }
    }else {
        total = dices.reduce((acc, cur)=>acc+cur);
    }
    if(amount > 1){
        advantage = Math.max(...dices);
        disadvantage = Math.min(...dices);
        if(modifier){
            switch(modifierType){
                case "plus":
                    advantage += modifier;
                    disadvantage += modifier;
                    break;
                case "minus":
                    advantage -= modifier;
                    disadvantage -= modifier;
                    break;
            }
        }
    }
    return {dices, total, advantage, disadvantage};
}