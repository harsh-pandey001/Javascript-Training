// ---------------------map and reduce--------------------------

const harsh = new Map() //creating map using constructor function 

harsh.set("harsh",88);
harsh.set("sh",8);
harsh.set("solanki",80);
harsh.set("yu",87);
harsh.set("cx",84);
harsh.set("mm",82);
harsh.set("uu",81);

// console.log(harsh.size)

let vs = harsh[Symbol.iterator]();

// for(const [key,value] of harsh){
//     console.log(`${key} : ${value}`);
// }

// for(const elements of harsh){
//     console.log(elements);
// }

// harsh.forEach((key  , value)=> {
//     console.log(value  +" : "+ key);
// })

//print the value without for loops
// console.log(vs.next().value)
// console.log(vs.next().value)
// console.log(vs.next().value)
// console.log(vs.next().value)

// ---------------------map methods-----------------------------


// harsh.clear();  // deleteing all the element from the map 
// console.log(harsh.size)



// harsh.delete("harsh");  // Deleting specified [key value] pair from the map 
// console.log(vs.next().value)
// for(const elements of harsh){
//     console.log(elements);
// }






console.log(harsh.entries()) //The entries() method of Map instances returns a new map iterator object that contains the [key, value] pairs for each element in this map in insertion order.

function logMapElements(value, key, map) {
  console.log(`m[${key}] = ${value}`);
}

new Map([
  ['foo', 3],
  ['bar', {}],
  ['baz', undefined],
]).forEach(logMapElements);


console.log(harsh.get("sh"))//If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map object.

const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 9 },
  { name: "bananas", type: "fruit", quantity: 5 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 12 },
  { name: "fish", type: "meat", quantity: 22 },
];













