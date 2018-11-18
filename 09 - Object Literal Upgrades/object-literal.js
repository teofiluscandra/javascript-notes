// dont repetitive equal names
const first = 'Teo'
const age = 24
const last = 'Candra'

const person = {
    first, age, last
}

console.log(person)

const modal = {
    create(selector){

    },
    open(content){

    },
    close(goodbye){

    },
}

// opposite color
function invertColor(color) {
    return '#' + ("000000" + (0xFFFFFF ^ parseInt(color.substring(1),16)).toString(16)).slice(-6);
}

const key = 'pocketColor'
const value = '#ff4322'

const tShirt = {
    [key]: value,
    [`${key}Opposite`]: invertColor(value)
}

console.log(tShirt)

const keys = ['size', 'color', 'weight'];
const values = ['medium', 'red', 100];
const pants = {}

keys.forEach((item,i) => {
    pants[item] = values[i]
})
const shirt = {
    [keys.shift()]: values.shift(),
    [keys.shift()]: values.shift(),
    [keys.shift()]: values.shift()
}

console.log(shirt)
console.log(pants)
