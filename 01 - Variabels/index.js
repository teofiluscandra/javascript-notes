/**
 * var
 * processed before any code is execute
 * var is scoped to the nearest function block
 */

function setWidth(){
    var width = 100;
    console.log(width)
}
setWidth()

var age = 100
if(age > 12) {
    var dogYears = age * 7
    console.log(dogYears)
}
console.log(dogYears)
// 700 , because dogYears will global

/**
 * let
 * declare variables that are limited in scope to the block, statement, or expression on which it is used. 
 * This is unlike the var keyword, which defines a variable globally, or locally to an entire function regardless of block scope.
 * var cannot declare twice in same scope, will generate warning in browser, but let can do that
 */

let points = 50
let is50 = false

if(points === 50) {
    console.log("points === 50")
    let is50 = true
    console.log(is50)
}

console.log(is50)
// false, because different scope

/**
 * const
 * constant variabel , cannot change
 * immutable
 * block scope like let variabels
 */

const person = {
    name: 'Me',
    age: 20
}

person.name = 'Teo' // attribute can change
// person = {name : 'Teo'} this line will error because the object is const

const constPerson = Object.freeze(person)
person.name = 'Name' // attribute cannot change because Object freezed
constPerson.name = 'SecondName' // attribute cannot change because Object freezed
console.log(person)

/**
 * let and const in real world
 */

 // see the difference
 for (var index = 0; index < 10; index++) {
    console.log(index)
    setTimeout(function() {
        console.log(`the number is ${index}`)
    }, 1000)
}

 for (let index = 0; index < 10; index++) {
     console.log(index)
     setTimeout(function() {
         console.log(`the number is ${index}`)
     }, 1000)
 }

 /**
  * prevent to use var if you are in es6 or use it for top-level variabels
  * use const by default
  * only use let if rebinding is needed
  */