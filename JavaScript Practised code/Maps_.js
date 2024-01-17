// ---------------------map and reduce--------------------------

const harsh = new Map([["myrespect",99]]) //creating map using constructor function with values

//Map.set() The set() method of Map instances adds or updates an entry in this map with a specified key and a value.
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



// console.log(harsh.entries()) //The entries() method of Map instances returns a new map iterator object that contains the [key, value] pairs for each element in this map in insertion order.


// this way also we can print the map into the console----

// function logMapElements(value, key, map) {
//   console.log(`m[${key}] = ${value}`);
// }

// new Map([
//   ['foo', 3],
//   ['bar', {}],
//   ['baz', undefined],
// ]).forEach(logMapElements);


//console.log(harsh.get("sh"))//If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map object.



// Map.prototype.has()
// The has() method of Map instances returns a boolean indicating whether an element with the specified key exists in this map or not.
// console.log(harsh.has("harsh"));




// Map.keys() // it can extract all keys from the map functions

// const iteratble = harsh.keys()
// console.log(iteratble.next().value);//it will print the first element using corresponding key 



// Map.values() //It extracts all values of the key from the map function 

// const iteratable2 =  harsh.values();
// console.log(iteratable2.next().value)//it will print the first element using corresponding key 




const inventory = [
  { name: "asparagus", type: "meat", quantity: 9 },
  { name: "bananas", type: "fruit", quantity: 5 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 12 },
  { name: "fish", type: "meat", quantity: 22 },
];

const data = [

  { name: 'Alice', department: 'Sales' },
  { name: 'Bob', department: 'Marketing' },
  { name: 'Charlie', department: 'Sales' },

];




const restock = { restock: true };
const sufficient = { restock: false };

const result = Map.groupBy(inventory, ({ quantity }) =>
  quantity < 6 ? restock : sufficient,
);
// console.log(result.get(restock));


// let check  = {
//   type : "fruit"
// }


// function check(quantity){
//   return quantity < 6 ? restock : sufficient
// }


// Given inventory array object group byed  and return map along with key which return according to callback function

const return_type =  Map.groupBy(inventory, (product)=>  product.type); // here map is returned with key type - type property of the object array inventory

const return_quantity =  Map.groupBy(inventory, (product)=>  product.quantity);// here map is returned with key type - type property of the object array inventory

const return_name =  Map.groupBy(inventory, (product)=>  product.name);
// here map is returned with key type - type property of the object array inventory


// const result1 = Map.groupBy(inventory, ( quantity ) =>
//   quantity.quantity < 6 ? true : false,
// );
// console.log(result);



const result2 = Map.groupBy(data,(person)=> person.department == "Sales")


console.log(result2.get(true)) // it will return the array object containing sales department

console.log(return_type.has("meat")) //true

// console.log(return_quantity)

// console.log(return_name.get("bananas"))

// return_type.forEach(element => {
//   console.log(element)
// });






















