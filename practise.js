// All Arrays initailisation
let test =  new Array();
let test2 =  Array(2,3,4,5,6);
// let test2 = [2,3,4,5,6];
let test3 = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
let test4  = new Array(20,"u",3.8);



// testing call back function
const susp = (value)=> value > 0


// all methods of arrays 
console.log(test2.every((value)=> value > 0))
// The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.


console.log(test2.filter(function check(value){ return value < 9}))




// console.log(test3.filter((value)=> value.length > 5))


console.log(test2.find((value)=> value < 9))
// The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.








// console.log()
// document.write(test2)

