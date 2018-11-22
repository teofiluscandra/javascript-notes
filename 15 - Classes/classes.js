class Dog {
    constructor(name, breed){
        this.name = name;
        this.breed = breed;
    }

    bark() {
        console.log(`Bark Bark, My Name is ${this.name}`)
    }

    static info() {
        console.log('Dog is an animal')
    }

    get description() {
        return `${this.name} is a ${this.breed}`
    }

    set nicknames(value) {
        this.nick = value.trim()
    }
    get nicknames() {
        return `${this.nick}`
    }
}

const bolu = new Dog('Bolu', 'Piko');
console.log(bolu)
bolu.bark()

// static method
Dog.info()
console.log(bolu.description)
bolu.nicknames = 'Candra'
console.log(bolu.nicknames)