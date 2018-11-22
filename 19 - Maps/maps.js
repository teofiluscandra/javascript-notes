// Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

const dogs = new Map();

dogs.set('Bali', 3);

const isBaliExist = dogs.has('Bali');
console.log(isBaliExist);

dogs.forEach((val, key) => console.log(val, key));

for (const [key, val] of dogs) {
    console.log(key, val)
}