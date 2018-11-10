/**
 * When not to use Arrow Functions
 */

// if you want to bind to an object 
const person = {
    points: 23,
    score: () => {
        // this is not refer to anything / can be refer to Window
        console.log(this)
        this.points++
    }
}
person.score()
console.log(person)

const person2 = {
    points: 23,
    score: function() {
        // this is refer to this Object
        console.log(this)
        this.points++
    }
}
person2.score()
console.log(person2)

// when you need to add a prototype method
class Car {
    constructor(name, colour){
        this.name = name;
        this.colour = colour
    }
}

const jeep = new Car('Jeep', 'green')
const sedan = new Car('Sedan', 'white')

Car.prototype.summarize = () => {
    return `This car is a ${this.name} in the colour ${this.colour}`
}

// will undefined
console.log(jeep.summarize())

Car.prototype.summarize2 = function() {
    return `This car is a ${this.name} in the colour ${this.colour}`
}
console.log(jeep.summarize2())

// when you need arguments object
const orderNames = function() {
    const names = Array.from(arguments)
    console.log(arguments)
    return names.map((name, i) => {
        return `${names} is ${i + 1}`
    })
}

orderNames('Atin','Utin','Itin')
