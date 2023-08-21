export class Persona{

    constructor(
        public name:string, 
        public lasName:string,
        public address?:string) {
    }

}

// export class Hero extends Persona{

//     /**
//      *
//      */
//     constructor(
//         public alterEgo:string,
//         public age:number,
//         public realName:string
//         ) {
//         super(realName,"New Yor k")
        
//     }

// }

export class Hero{
    constructor(
        public alterEgo:string,
        public age:number,
        public realName:string,
        public person:Persona,
        ) {
        // this.person = new Persona(realName);
    }

}
const person = new Persona("Irtoman","Yo","New York")
const iroman = new Hero("Briant",45,"Tony",person);

console.log(iroman)