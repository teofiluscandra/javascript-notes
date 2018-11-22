class Animal {
    constructor(name){
        this.name = name;
        this.thirst = 100;
        this.belly = [];
    }
    drink() {
        this.thirst = -10;
        return this.thirst;
    }
    eat(food) {
        this.belly.push(food);
        return this.belly;
    }
}

class Dog extends Animal {
    constructor(name, breed){
        super(name);
        this.breed = breed;
    }
    bark() {
        console.log(`Bark Bark, My Name is ${this.name}`)
    }
}

const rhino = new Animal('shiney');
console.log(rhino);
const bolu = new Dog('Bolu', 'Golden');
console.log(bolu);
bolu.bark();