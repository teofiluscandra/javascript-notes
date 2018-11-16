const mie = ['Indomie','Sarimi','Sedapp']

// for of creates a loop iterating over iterate member object, but for in can iterate enumerable object
// can be use for array, map, set, string, typedArray

let iterable = new Map([['a', 1], ['b', 2], ['c', 3]]);
for (let entry of iterable) {
  console.log(entry);
}
for (let [key, value] of iterable) {
  console.log(value);
  console.log(key);
} 

// object entries method return an array 
for (const [iterator, data] of mie.entries()) {
  console.log(data)
}

function addUpNumbers(){
  console.log(arguments)
}

addUpNumbers(1,2,3,4,5,12,3,2,3,1,2,3)