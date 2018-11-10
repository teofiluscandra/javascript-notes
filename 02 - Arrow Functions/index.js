const names = ['Amin', 'Aman', 'Anto']

// before use arrow function
const fullNames = names.map(function(name) {
    return `${name} Siahaan`
})
console.log(fullNames)

// use arrow functions
const fullNames2 = names.map((name) => {
    return `${name} Siahaan`
})
console.log(fullNames2)

// change to simple
const fullName3 = names.map(name => {
    return `${name} Siahaan`
})
console.log(fullName3)

// or more simpler
const fullName4 = names.map(name => `${name} Siahaan`)
console.log(fullName4)

// use it for functions

// before 
function showName(name) {
    return name;
}

console.log(showName('teo'))

// use arrow function
const showName2 = name => name
console.log(showName2('teo2'))