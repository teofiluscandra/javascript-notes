// Set objects are collections of values

const dog = new Set();
dog.add('Miko');
dog.add('Viko');
dog.add('Bolu');

for(const pets of dog) {
    console.log(pets);
}

const dogs = ['a','b'];
const dogSet = new Set(dogs);
console.log(dogSet);