

export function whastMyType<T>(argument:T):T {
    return argument;
}


const amIString=whastMyType<string>("Hola mundo")
const amINumber=whastMyType<number>(100)
const amIArrray=whastMyType<number[]>([1,2,3,4,5])

console.log(amIString.split(" "));
console.log(amINumber.toFixed());
console.log(amIArrray.join("-"));