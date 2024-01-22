// ----------------------------------------------------this keyword---------------------------------------------


let ram = "Ayodhaya";
// In an object method, this refers to the object.
let myfun = {
    firstname:"Harsh",
    lastname:"Pandey",
    printfullname:function(){
        console.log(this.firstname+" "+ this.lastname);  // here this keyword work properly because regular function can access the stuffs with its lexial environment 
    },
    printArrow : ()=>{
        console.log(this.firstname + " "+ this.lastname); 
    },
    printCombine: function () {
        let you =()=>console.log(this.firstname+" "+ this.lastname);
        
        you()
    }

}

//myfun.printArrow() // will return undefined  arrow functions don't provide their own this binding (it retains the this value of the enclosing lexical context).

//myfun.printfullname() 

//myfun.printCombine() //when it is wraped with regular function now its lexical environment allows this key words to access the stuffs 




// Alone, this refers to the global object.


// In a function, this refers to the global object.

// In a function, in strict mode, this is undefined.

// In an event, this refers to the element that received the event.

// Methods like call(), apply(), and bind() can refer this to any object.

// -----------------------Call Functions-------------------------


// The call() method of Function instances calls this function with a given this value and arguments provided individually.

// syntax 
// call(thisArg)
// call(thisArg, arg1, arg2, /* …, */ argN)


// myfun.printfullname();

let myname ={
    firstname: "Anshu",
    lastname:"Pandey",
}

function call_range(){
    firstname = "Harsh";
    lastname = "Pandey"
}
// myfun.printfullname.call(myname);

// let yours = function(){
//     console.log(this.firstname+" "+ this.lastname);
// }

// yours.call(myname);
// yours.call(myfun);

let call_fun = function(state,town,domain){
    console.log(this.firstname + " " + this.lastname + " from " + town + " " + state + " my domain is " + domain)
}


// call_fun.call(myname,"madhya pradesh","Maihar","Frontend");



function Product(name, price) {
    this.name = name;
    this.price = price;
    // Food.call(this)
    Food.apply(this)
    
  }
  
  function Food(name, price) {
    // Product.call(this, name, price);
    this.category = 'food'; // here this will point to food function 
  }
  
//   console.log(new Food('cheese', 5).category);
 
// console.log(new Product("Samosa",15).category);


// console.log(new Product(null , null).category)



// const min = Math.min.call(null,2,3,1,2,1,0); //we can also call directly the  call function with vailed arguments

// console.log(min)

// ----------------------Apply-------------------------------
// The apply() method of Function instances calls this function with a given this value, and arguments provided as an array (or an array-like object).

// Syntax

// apply(thisArg)
// apply(thisArg, argsArray)



// call_fun.apply(myname,["madhya pradesh","Maihar","Frontend"]);



// The apply() method is very handy if you want to use an array instead of an argument list.

// const numbers = [5, 6, 2, 3, 7];

// const max = Math.max.apply(null, numbers);

// console.log(max);



// ----------------------------Bind-----------------------------


const bind_fun = {
    
    Designation:"frontend developer",
    Name: "Rakesh",
    firstname:"rakesh",
    lastname:"jha",
    qualification: "MCA graduate",
    test1: function(qualif){
        if(qualif == true){
            console.log(this.firstname + " with  " + this.Designation);
        }
        else{
            console.log("You are qualified !!");
        }
    }
    
}
let test2 = function(){
    
    console.log(this.qualification + " " + this.Name)
}

// let the = bind_fun.test1.bind(test2);


// let the = test2.bind(bind_fun);
// here the function test2 binds to the object bind_fun and this key refers to 
// the()


// custom bind() function creation

function mybind(...args){
    const obj = this
    return function(){
        obj.apply(args[0]);
    }
}




// let the = test2.mybind(bind_fun);

// the();
 
 

// myfun.test1(true);
// myfun.bind()




