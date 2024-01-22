
let promise = new Promise(function (resolve, reject) {
    const x = "Harsh";
    const y = "jitesh"
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

let mine = "debugger"
console.log(mine);

let y = 99;
let z = "10"
debugger

console.log(y+z);



