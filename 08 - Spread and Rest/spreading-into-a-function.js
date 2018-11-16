const inventors = ['Einstein', 'Newton', 'Galileo'];
const newInventors = ['Musk', 'Jobs'];
// inventors.push.apply(inventors, newInventors)
inventors.push(...newInventors)

console.log(inventors)


const name = ['teofilus','candra']
function sayHi(first, last){
    console.log(`Hey ${first} ${last}`)
}

sayHi(...name)