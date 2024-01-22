// The try...catch statement is comprised of a try block and either a catch block, a finally block, or both. The code in the try block is executed first, and if it throws an exception, the code in the catch block will be executed. The code in the finally block will always be executed before control flow exits the entire construct.


// syntax

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
function isValidJSON(text) {
    try {
      JSON.parse(text);
      return true;
    } catch {
      return false;
    }
  }


function json_call() {
    fetch("./test.json").then((response)=>{
        return response.json()
    }).then(function(data){
        console.log(data)
        isValidJSON(data)
    })
}

json_call()


//   isValidJSON(json_call())