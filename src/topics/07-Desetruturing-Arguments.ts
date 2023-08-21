export interface Productos{
    description:string
    price:number
}


const phone:Productos = {
    description: "Redmi",
    price: 150.0
}

const table:Productos = {
    description: "iPard",
    price: 250.0
}


export interface TaxCalculationOptions{
    tax:number,
    products:Productos[]
}

// function taxCalculatioin({products,tax}:TaxCalculationOptions):[number,number] {
export function taxCalculatioin({products,tax}:TaxCalculationOptions):[number,number] {
     let total = 0;
     
     products.forEach(({price}) => {
       total += price;
     });

     return[total,total*tax];
}

const shopingCart =[phone,table];
const tax = 0.5;

const [total,iva] = taxCalculatioin({
    products:shopingCart,
    tax,
})

console.log("Total", total)
console.log("Tax", iva)



export{}