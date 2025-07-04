// The try...catch statement is comprised of a try block and either a catch block, a finally block, or both. The code in the try block is executed first, and if it throws an exception, the code in the catch block will be executed. The code in the finally block will always be executed before control flow exits the entire construct.

// SYNTAX
// try {
//     tryStatements
//   } catch (exceptionVar) {
//     catchStatements
//   } finally {
//     finallyStatements
//   }



// try {
//     adddlert("Welcome guest!");
// // const a;
// // a = 99;
// }
// catch (err) {
//     document.getElementById("demo").innerHTML = err.message;
//     console.log(err)
// }

// try {
// const a;
// a = 99;
// console.log(a)
// }catch(e){

//     console.log(e.message)

// }

// try {
//     throw new TypeError("oops");

//   } catch ({ name, message }) {
//     console.log(name); // "TypeError"
//     console.log(message); // "oops"
//   }


//   to check the json is valid
//  async function json_call() {
//    let prom =   await fetch("./JavaScript Practised code/test.json")

//    return prom.json;
// }


// let JSONobj = {
//     Name: "Harsh",
//     Designation: "Associate Software Engeener Trainee",
//     Company: "CubeXO",
//     Experiance: "2 months",
//     College: "School of Computer Science & IT"
// }

// JSON.parse(JSONobj)
// console.log(JSONobj);


// function isValidJSON(JSONobj) {
//     try {
//         // JSON.parse(JSONobj);
//         console.log(JSON.stringify(JSONobj));

//         return true;
//     } catch (error) {
//         // console.log(error);
//         return false;
//     }
// }

// console.log(isValidJSON(JSONobj));



//Error handling with .catch()
function json_call() {
    fetch("http://api.weatherapi.com/v1/current.json?key=a18d009f33eb473d9c9175805231912&q=London&aqi=no").then((response) => {
        if (!response.ok) {
            console.log(response.status);
            
            return response.json()
        }
    }).catch(error => {
        console.error('An error occurred:', error)
    })
}


json_call()

// async function json_call() {
//     let q = await fetch("./test.json");
//     let ret = await q.json();

//     console.log(ret);
//     return ret;
// }

// const prom = async () => {
//     let response = await json_call();
//     console.log(response);

// }

// prom()


//   isValidJSON(json_call())

