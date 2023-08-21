const addNumbersa= (a:number,b:number):string=> {

    return `${a+b}`;
}

function muntiply(firstNumber:number, secondNumber?:number, base=2) {
    return firstNumber * base;
}

// const result:string = addNumbersa(1,2);
// const muntiplyResult : number = muntiply(5)
// console.log({result, muntiplyResult})


interface character{
    name:string;
    hp:number;
    showHp:()=> void;
}


const heal = (character:character, amount:number)=>{
    character.hp+= amount;
}
const strider={
    name:"Arabe",
    hp:60,
    showHp(){
        console.log(`Puntos de vida ${this.hp}`);
    }
}

heal(strider,10)
heal(strider,10)
strider.showHp();


export{}