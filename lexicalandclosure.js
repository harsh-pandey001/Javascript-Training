//------------------ Lexical Scope------------------- 
// function a(){
// console.log(x);
// }

// var x = 89;
// a() // it will print 89

// -------------

// function a() {
//     b()
//     function b(){
//         console.log(x);
//     }
// }

// var x = 77;
// a();

// ----------------------

// function a() {
//     var x = 77
//     function b() {
//         console.log(x);   //lexcal environment of b and its parent inside the function a() invokations
//     }
//     b()

// }
// a()
// console.log(x)


// --------------------------
// Different Errors on it 
// *Refference Error 
// *Syntax Error 
// *Type Error 


// ----------------Syntax Error--------------------
//  const l;
//  l = 89;

// let a = 44;
// let a = 9

 //-----------------Type Error-----------------------

//  const y = 78;
//  y = 99;

// -------------------Refrerence Error----------------
// * type - 1  where variable h cannot be accessed
// * they are into the temporal dead zone 
// console.log(h)
// let h = 99;


// type - 2 
// console.log(y)
//here Y is not defined 



// ------------------------Closure------------------------

// A function which is bind together with its lexical envirinment is called closure,
// Function  alongs with its lexical scops forms a closure 


// function b(){
//     var a = 99;
//     function n() {
//         console.log(a)
//     }
//     n();
// }
// b()


// if (Math.random() > 0.5) {
//     const x = 1;
//   } else {
//     const x = 2;
//   }
//   console.log(x);

function b(){
        var a = 99;
        function n() {
            console.log(a)
        }
        return n
    }
   var x = b()
   
   console.log(x)

   x()

