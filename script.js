// var , let , const
// Data types (String, Number, BigInt, Boolean, undefined, null, Symbol)


// Before ES6 mostly we use var keyword to declare datatype 
// but it contains bugs on it so we Use Let instead of var


// --------------------------------------------var , let , const-----------------------------------------

const author =  "Freakin man";

// author = "kl" // it will through errors 


// let tried = "first time"
// let tried = "jksd"; //this will through errors 

// tried = "adfadf" //  this will not through the errors

// console.log(author)
// console.log(tried)

// var a =  45;
// let b =  "harsh"
// var c = null 
// var d = undefined 

// {
//   let b = "this"  // block scope 
//   console.log(b)
// }

// console.log(b); 


// -------------------------------------------------Primitive data types----------------------------- 

// n -- Number
// n -- null 
// s -- String
// s -- Symbol
// b -- Boolean
// b -- BigInt
// u -- undefined


// let a = null;
// let z =  345;
// let c = true; 
// let d =  BigInt("999999") + BigInt("84429083");
// let e =  "Harsh"
// let f = Symbol("I don't wanna talk to me")
// let g = undefined

// console.log(a,z,c,d,e,f,g)
// console.log(typeof f)

// --------objects in JavaScript-------


// const item = {
//   "Nicname": true,
//   "RealName" : false,
//   "fake" : 67,
//   "Job" : undefined 
// }

// console.log(item["fake"])

// console.log(item["jajaj"])




// Practice questions

let a = "Harsh"
let b = 66676666
console.log(a + b)
 




// -------------------------------------Project----------------------------------- 

// function getTimeOfDayGreeting() {
//     var x = document.getElementById("greet");
//     const currentTime = new Date();
//     const currentHour = currentTime.getHours();


//     if (currentHour >= 5 && currentHour < 12) {
         
//         x.innerHTML = "Good morning! the time is "; 
//     } else if (currentHour >= 12 && currentHour < 17) {
//         x.innerHTML =  "Good afternoon! " ;
//     } else if (currentHour >= 17 && currentHour < 21) {
//         x.innerHTML = "Good evening!";
//     } else {
//         x.innerHTML = "Good night!"  ;
//     }
// }


