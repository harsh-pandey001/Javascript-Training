// ----------------------------------------------Spread operator---------------------------------------------------

let treat = [8,7,35,3,2,4,5,4,4]

function sum(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum = sum + args[i];
    }
    return sum;
}

console.log(sum.apply(null,treat))
console.log(sum.call(null,4,5,6,3,24,))
console.log(sum(4,3,2,4))