// ----------------------------------------------Rest Operator---------------------------------------------------

// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.


function check_min(...args) {
    return args.reduce((acum, cur) =>{ if(acum < cur){
       return acum
     }
     else {
        return cur
     }   
 }, 0)
}

let min = check_min(2, 3, 1, 0)
console.log(min);


const array = [1, 2, 3];
const obj = { ...array }

console.log(obj);


// --------------------------------------------Spread operator---------------------------------------------------

// Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element


let treat = [8, 7, 35, 3, 2, 4, 5, 4, 4]

function sum(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum = sum + args[i];
    }
    return sum;
}

// console.log(sum.apply(null, treat))
// console.log(sum.call(null, 4, 5, 6, 3, 24,))
// console.log(sum(4, 3, 2, 4))




