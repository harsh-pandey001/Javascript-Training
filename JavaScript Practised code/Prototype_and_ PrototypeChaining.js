// Prototypes are the mechanism by which JavaScript objects inherit features from one another.

// Every object in JavaScript has a built-in property, which is called its prototype.

// The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.

let next = {
    name:"CubeXo",
    subject: "Maths"
}

let next2 = {
    code: 221
}


const obj = {
    name2: "Ruby",
    age: 44,
    task: function name(params) {
        console.log("your name is " + this.name + "your age is " + this.age);
    }
}

const obj2 = {
    name:"Harsh Pandey",
    Hobbies : "Playing Basketball"
}



const myDate = new Date();
let object = myDate;

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);




// next = Object.getPrototypeOf(obj);
// next.__proto__ = obj;
// next2.__proto__ = obj;





// obj.__proto__.gender = "Male";
// obj.name = "jjj"
// obj.[[Prototype]].type = ""
// Object.getPrototypeOf(obj).gender = "female"



// Array.prototype.myUcase = function (hy) {
//    this.push(hy)
// };

// even = new Array("harsh", "Pandey", "anshu")
// even.myUcase("tried")
// console.log(even)
// let try2 = "Everything is temporary"

// let try3 = 9;

// try3.__proto__ = try2

