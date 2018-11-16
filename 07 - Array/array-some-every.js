const ages = [32, 15, 19, 12];

const adult = ages.some(age => age >= 18)
console.log(adult) // true

// is all can drink alkohol?
const canAll = ages.every(age => age >= 18)
console.log(canAll) // false