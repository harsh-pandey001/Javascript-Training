// The Set object lets you store unique values of any type, whether primitive values or object references.

const harsh = new Set();

harsh.add(66)
harsh.add(1);
harsh.add(5); 
harsh.add(5); 
harsh.add("some text"); 
const o = { a: 1, b: 2 };
harsh.add(o);
console.log(harsh);



// converting between Set and Array
const mySet2 = new Set([1, 2, 3, 4]);
console.log(mySet2.size); // 4
console.log([...mySet2]); // [1, 2, 3, 4]

// intersect can be simulated via
const intersection = new Set([...harsh].filter((x) => mySet2.has(x)));

// difference can be simulated via
const difference = new Set([...harsh].filter((x) => !mySet2.has(x)));

// Iterate set entries with forEach()
mySet2.forEach((value) => {
  console.log(value);
});