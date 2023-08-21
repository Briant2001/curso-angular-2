import { Productos, taxCalculatioin } from './07-Desetruturing-Arguments';

const shopinCart: Productos[]=[
    {
        description:"Nokia",
        price:150.0
    },
    {
        description:"iPad",
        price:250.0
    },
]
const tax = 0.5;

const [total, totalTax]=taxCalculatioin({products:shopinCart,tax});

// console.log(total);
// console.log(totalTax);