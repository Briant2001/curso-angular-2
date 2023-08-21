const skills :string[]=["Bash", "Healing","Counter"]

interface  Character {
    name:string;
    hp:number;
    skills:string[];
    hometown?:string;
    // hometown?:string;
}

const strider:Character = {
    name:"Holoa",
    hp:100,
    skills:["Bash"],
}

strider.hometown ="dejdjd"

console.log(strider);


export{}