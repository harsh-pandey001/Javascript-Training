// All Arrays initailisation
let test = new Array();
// let test2 =  Array(2,3,4,5,6);
let test2 = [2, 3, 4, 5, 6];
let test3 = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
let test4 = new Array(20, "u", 3.8);




// console.log(test2.at(-3)) //Negative integers count back from the last item in the array.



// console.log(test2.concat(test3))
// The concat() method of Array instances is used to merge two or more arrays.





// testing call back function
// const susp = (value)=> value > 0


//----------------------All methods of array----------------------

// console.log(test2.every((value)=> value > 0))
// The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.


// console.log(test2.find((value)=> value < 9))
// The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.



//------------------- Array.splice()---------------------

// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2)
// splice(start, deleteCount, item1, item2, /* …, */ itemN)


// The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

//test2.splice(3)// here only first 3 element will left remaining are removed from the original Array 

//test2.splice(1,2,9,10)//here at index 1,2 elements deleted,and replaced by 9 and 10 respectivily

// console.log(test2)

// To create a new array with a segment removed and/or replaced without mutating the original array, use we an use toSpliced()




// -----------------------------------Array.slice()-------------------------

// The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array.
//The original array will not be modified.

// slice()
// slice(start)
// slice(start, end)

// test2.slice(2) // here starting 2 elements of the array sliced but doesnot effect the original array 
// console.log(test2.slice(2)) 
// console.log(test3.slice(2,4));


// ---------------------------------Arrays.filter()--------------------

// The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

// filter(callbackFn)
// filter(callbackFn, thisArg)

// let test2 = [2,3,4,5,6];
// let test3 = ['spray', 'elite', 'exuberant', 'destruction', 'present'];



// console.log(test2.filter(function check(value){ return value < 4})) //here according to the condition of the call back function Array will return 

// console.log(test3.filter((value)=> value.length > 5)) //here the word length greater than 5 will return 

// console.log(test2.filter((value)=> value == 3 ))// According to condition it returns the array that which elements passes the considions from the given array 

// ------------------------------Array.map()----------------------------

// The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.



// console.log(test2.map((x) => x * 4)) //map changes the orginal array content according to conditions

// -----------------------------------------------Array.reduce()------------------------------------------------


// In reducer function The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

// reduce(callbackFn)
// reduce(callbackFn, initialValue)


// test2 = [2,3,4,5,6];
// const initialValue = 9

// const sum = test2.reduce(function (acumulator, currentValue) {
//     return acumulator + currentValue;
// }, initialValue);
// console.log(sum); // 10


var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];


// const obj = pets.reduce((acum,cur)=>{

//     if(!acum[cur]){
//         acum[cur] = 1;
//     }
//     else{
//         acum[cur]++;
//     }

//     return acum
// },[])

// console.log(obj)




// ------------------------------------------Array.reduceRight()--------------------------

// The reduceRight() method of Array instances applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.

// reduceRight(callbackFn)
// reduceRight(callbackFn, initialValue)

// let redreight =  [1,2,3,4,5,1].reduce((acumulator,currentValue)=> acumulator + currentValue,)

// console.log(redreight);



// -------------------------Array.Shift(), Array.some(),Array.sort(),Array.reverse()----------------------------


let arr = [6,8,10,12]
let arrstr = ["one","two","three"]

// const mine = arr.shift() // method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array.

// console.log(arr); // 6 
// console.log(mine); // [8,10,12]



// let rev = arr.reverse() // it reverse the exisiting array 
// let rev1 = arrstr.toReversed(); //it reverse the elements in an array without mutating the original array, use toReversed().

// console.log(arr);//[12,10,8,6]
// console.log(rev);//[12,10,8,6]
// console.log(arrstr); //['three', 'two', 'one']
// console.log(rev1);//






// let res = arr.some((element)=>element % 2 == 0)// The some() method of Array instances tests whether at least one element in the array passes the test implemented by the provided function.

// console.log(res);//true 

// console.log(arr.some((element)=>element == 2));//false
// It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.





// let arr4 = [3,1,2,5,99,0]
// // arr4.sort()
// let a = arr4.toSorted();
// // To sort the elements in an array without mutating the original array, use toSorted().
// console.log(arr4);




console.log(test2.toString());//toString() method of Array instances returns a string representing the specified array and its elements.




















