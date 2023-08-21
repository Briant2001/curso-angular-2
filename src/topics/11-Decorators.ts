
function Decorador<T extends {new(...args:any[]):{}}>(constructor: T ) {
    return class extends constructor{
        newProperty  = "New Property"
        hello = "override"
    }
}


@Decorador
export class SuperClass {
    public myProperty:string = "Abc123";
    print(){
        console.log();
    }
    constructor() {
        
    }
}


const myClass = new SuperClass();

console.log(myClass);