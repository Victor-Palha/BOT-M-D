type DiceProps = {
    amount: number;
    dice: number;
    modifier?: number;
    modifierType?: "plus" | "minus";
}
type RollDiceReturn = {
    dices: number[];
    total: number;
    criticals: number;
    criticalsError: number
}
export function RollDice({amount, dice, modifier, modifierType}: DiceProps): RollDiceReturn{
    var dices: number[] = [];
    var total: number = 0;
    var criticals: number = 0;
    var criticalsError: number = 0;
    for(let i = 0; i < amount; i++){
        const verify = Math.floor(Math.random() * dice) + 1;
        dices.push(Math.floor(verify));
        if(verify === dice){
            criticals++;
        }else if(verify === 1){
            criticalsError++;
        }
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
    return {dices, total, criticals, criticalsError};
}