// -----------------------Call Functions-------------------------

let myfun = {
    firstname:"Harsh",
    lastname:"Pandey",
    printfullname:function(){
        console.log(this.firstname+" "+ this.lastname);
    }
}

// myfun.printfullname();

// let myname ={
//     firstname: "Anshu",
//     lastname:"Pandey",
// }

// myfun.printfullname.call(myname);

// let yours = function(){
//     console.log(this.firstname+" "+ this.lastname);
// }

// yours.call(myname);
// yours.call(myfun);

// let call_fun = function(state,town,domain){
//     console.log(this.firstname + " " + this.lastname + " from " + town + " " + state + " my domain is " + domain)
// }


// call_fun.call(myname,"madhya pradesh","Maihar","Frontend");


// ----------------------Apply-------------------------------

// call_fun.apply(myname,["madhya pradesh","Maihar","Frontend"]);

// The apply() method is very handy if you want to use an array instead of an argument list.


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




let the = test2.mybind(bind_fun);

the();
 
 

// myfun.test1(true);
// myfun.bind()



// rest operator 
// deep copy and shallow copy 
// map reduce 
// what is demonsing (closure)
//aync awaits promises .then 
//pass by refference and pass by value 
