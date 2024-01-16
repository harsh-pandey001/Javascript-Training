Array.prototype.myUcase = function (hy) {
   this.push(hy)
};


even = new Array("harsh", "Pandey", "anshu")
even.myUcase("tried")
console.log(even)
let try2 = "Everything is temporary"

let try3 = 9;

// try3.__proto__ = try2


const obj = {
    name2: "Ruby",
    age: 44,
    task: function name(params) {
        console.log("your name is " + this.name + "your age is " + this.age);
    }
}


obj.__proto__.gender = "Male";
obj.name = "jjj"
// obj.[[Prototype]].type = ""
Object.getPrototypeOf(obj).gender = "female"


let next = {
    name:"CubeXo",
    subject: "Maths"
}

let next2 = {
    code: 221
}


// next = Object.getPrototypeOf(obj);
next.__proto__ = obj;
next2.__proto__ = obj;
