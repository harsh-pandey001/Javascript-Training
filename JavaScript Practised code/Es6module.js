
// Normal Export functionality 
// export let vary = 99;
// export function keka(){
//     console.log("Attendence registered !")
// }


let test =  new Map();
test.set("Harsh",21);
test.set("Kushal",46);
test.set("Amit",3);

function printfun(){
    test.forEach((key , element)  => {
        console.log(`${element} : ${key}`);
    });
}

function printfun2(){
    for (const [element, key] of test) {
        console.log(element +" : "+ key);
    }
}


let test2 ={
    a:1,
    b:2,
    c:3
}


function printfun3(){
 for (const key in test2) {
   console.log(`${key} : ${test2[key]}`)
 }
}


export default printfun;
export {printfun2,printfun3}
// we can only use once at a time default keyword with export 