export interface Passenger {
    name : string;
    children?:string[];
}

const passenger1 : Passenger = {
    name: "Briant",

}



const passenger2 : Passenger = {
    name: "Ana",
    children:["Elizabet","Natalia"]
    
}

const printChildren  = (passenger:Passenger)=>{
    const howManyChildren  = passenger.children?.length || 0;  
    console.log(passenger.name,"Tiene ",howManyChildren," hijos")
}

printChildren(passenger2);

