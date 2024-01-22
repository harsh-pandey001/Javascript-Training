
let promise = new Promise(function (resolve, reject) {
    const x = "Harsh";
    const y = "Harsh"
    if (x === y) {
        resolve();
    } else {
        reject();
    }
});

promise.
    then(function () {
        console.log('Success :-)');
    }).
    catch(function () {
        console.log('Some error has occurred');
    });

    

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

async function Ausis() {
    return await fetch(Api_test);

}


Ausis().then((response) => {
    console.log("using async")
    console.log(response.status);
    return response.json()
}).then((data) => {
    console.log(data)

})


// const location = data.location;
// const currentWeather = data.current;


// const temperatureElement = document.createElement('p');
// temperatureElement.textContent = `Temperature: ${currentWeather.temp_c} °C`;


