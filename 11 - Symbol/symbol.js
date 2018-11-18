const teo = Symbol('Teo')
const person = Symbol('person')

console.log(teo)

const destinations = {
    [Symbol('name')]: 'Kedai Mojook', 
    [Symbol('address')]: 'Tukad Barito'
}

const syns = Object.getOwnPropertySymbols(destinations)
const data = syns.map(sym => destinations[sym])
console.log(data)