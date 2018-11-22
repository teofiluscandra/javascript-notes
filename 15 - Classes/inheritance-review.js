function Dog(name, breed) {
    this.name = name;
    this.breed = breed;
}

Dog.prototype.bark = function() {
    console.log(`Bark Bark, My Name is ${this.name}`)
}

const bolu = new Dog('Bolu', 'Piko');
console.log(bolu)
bolu.bark()