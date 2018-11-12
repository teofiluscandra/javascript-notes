const courseKey = 'RB1234'
const flightNumber = '20-RA-KA'
const nik = '123123123RT0001'

// startsWith()
console.log("1 :" + courseKey.startsWith('RB')) // true
console.log("2 :" + courseKey.startsWith('rb')) // false
console.log("3 :" + flightNumber.startsWith('RA',3)) // true
console.log("4 :" + nik.endsWith('RT',11)) // true
console.log("5 :" + nik.includes('RT')) // true

const make = 'BMW'
const model = 'x5'
const colour = 'Royal Blue'

function leftPad(str, length = 20) {
    return `${' '.repeat(length - str.length)}${str}`
}

console.log(leftPad(make))
console.log(leftPad(model))
console.log(leftPad(colour))