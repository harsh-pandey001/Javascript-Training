document.write("Practise of Settimeout and SetInterval, Promises")

// setTimeout(code)
// setTimeout(code, delay)



// let a = setTimeout(function(){
//   alert("i am harsh")
// },2000)

// let b =  prompt("Do you want to run the setTimeout ? ")

// if("n" == b){
//   clearTimeout(a)
// }

// console.log(a);


// --------------------------------------------

// setTimeout(functionRef)
// setTimeout(functionRef, delay)
// setTimeout(functionRef, delay, param1)
// setTimeout(functionRef, delay, param1, param2)
// setTimeout(functionRef, delay, param1, param2, /* …, */ paramN)



// const sum = (a,b) => {
//   console.log("Lets Go buddy" + (a + b + c));
//   a + b
// }

// setTimeout(sum , 2000, 6, 9, 9);



// let a = setInterval(() => {
//   alert("Set Interval is created ")
// }, 3000);


// setInterval(code)
// setInterval(code, delay)



// setInterval(func)
// setInterval(func, delay)
// setInterval(func, delay, arg1)
// setInterval(func, delay, arg1, arg2)
// setInterval(func, delay, arg1, arg2, /* …, */ argN)

// to stop setinterval 

// let b =  prompt("Do you want to run the  SetInterval ? ")


// const sum = (a,b,c,d)=>{
//   console.log("Lets Go buddy" + (a + b + c));
//   //   a + b
// }

// setInterval(sum, 2000, 9,9,9)



// if("n" == b){
//   clearInterval(a)
// }

// setTimeout(clearInterval(b), 20000)
// clearInterval(b)



// -------------------------------Promises--------------------------------------------------

// let promise =  new Promise(function(resolve, reject) {
//    alert("I am an alert in promises")
//    resolve(90)
// })

// // asynchronus nature of javascript 
// console.log("1")
// setTimeout(() => {
//   console.log("2")
// }, 2000);
// console.log("3")

// console.log(promise)


// let obj = {
//   name : "harsh"
// }

// console.log(obj.name)

// obj = null 

// console.log(obj)

//now name is unreachable 


// let obj = {
//   name : "harsh"
// }

// console.log(obj.name)

// let obj1 = obj

// const obj2 = {
//   name : "Anshu"
// }


// console.log(obj1.name)

// obj = null 


// console.log(obj2.name)


//memory leak 

// let array = [];

// for (i = 5; i > 1; i++){
//   array.push(i - 1);
// }

// function greet(name, callback) {
//   console.log(`Hello, ${name}!`);
//   callback(); // The callback function is executed immediately after greeting
// }

// function sayGoodbye() {
//   console.log('Goodbye!');
// }

// greet('John', sayGoodbye);


// asyncronus callback function 

// function delayedGreet(name, callback) {
//   setTimeout(function () {
//     console.log(`Delayed Hello, ${name}!`);
//     callback(); // The callback function is executed after a delay
//   }, 3000);
// }

// function saySeeYou() {
//   console.log('See you later!');
// }

// delayedGreet('Alice', saySeeYou);

// function f() {
//   const x = {};
//   const y = {};
//   x.a = y; // x references y
//   y.a = x; // y references x

//   console.log("harsh")
//   return "azerty";
// }

// f();



