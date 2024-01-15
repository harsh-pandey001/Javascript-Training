// document.write("Practise of Settimeout and SetInterval, Promises")

// let Api_test = "http://api.weatherapi.com/v1/current.json?key=a18d009f33eb473d9c9175805231912&q=London&aqi=no"
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

// let promise1 = new Promise(function (resolve) {
//   console.log("I am an alert in promises1")
//   resolve(90)
// })
// // console.log(promise1)
// let promise4 = new Promise(function (resolve) {
//   console.log("I am an alert in promises1")
//   resolve(100)
// })
// // console.log(promise1)


// let promise2 = fetch(Api_test)
// console.log(promise2)


// let tr = prompt("Enter some value");
// let promise3 = new Promise((resolve, reject) => {
//   if (tr > 5) {
//     // reject("value is greater")

//     throw new Error("value is big")
    
//   }
//   else {
//     setTimeout(() => {
//       resolve(tr)
//     }, tr * 1000);
//   }
// });

// promise3.catch((error)=>{console.error(error)})
// console.log(promise3)

// let prom = [promise1,promise2,promise3]

// Promise.all(prom).then((values)=>{
//   console.log(values)
// })
// Promise.all(prom)returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values. It rejects when any of the input's promises rejects, with this first rejection reason.



// Promise.allSettled(prom).then((results) =>
// console.log(results)
// );
// The Promise.allSettled() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises settle (including when an empty iterable is passed), with an array of objects that describe the outcome of each promise.

// Promise.allSettled(prom).then((values)=>
//   values.forEach((result) => console.log(result.status))
// )



// Promise.any(promise1,promise4).then((values)=>{
//   console.log(values)
// })
// The Promise.any() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when any of the input's promises fulfills, with this first fulfillment value. It rejects when all of the input's promises reject (including when an empty iterable is passed), with an AggregateError containing an array of rejection reasons.





// asynchronus nature of javascript 
// console.log("1")
// setTimeout(() => {
//   console.log("2")
// }, 2000);
// console.log("3")

// console.log(promise)


// -------------------------------------------------------async and await--------------------------------------


let Api_test = "http://api.weatherapi.com/v1/current.json?key=a18d009f33eb473d9c9175805231912&q=London&aqi=no";

async function Ausis(){
   
  return await fetch(Api_test);

}


Ausis().then((response)=>{
  console.log("using async")
  console.log(response.status);
  return response.json()
}).then((data)=>{
  console.log(data)
  
})




// const location = data.location;
// const currentWeather = data.current;


// const temperatureElement = document.createElement('p');
// temperatureElement.textContent = `Temperature: ${currentWeather.temp_c} °C`;


