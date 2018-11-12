const person = {
    name : 'Teofilus',
    age: 24
}

const {name, age} = person
console.log(name)
console.log(age)

const wes = {
    first: 'Wes',
    last: 'Bos',
    links: {
      social: {
        twitter: 'https://twitter.com/wesbos',
        facebook: 'https://facebook.com/wesbos.developer',
      },
      web: {
        blog: 'https://wesbos.com'
      }
    }
};

const {twitter: tweet, facebook: fb} = wes.links.social
console.log(tweet)


//set default
const {first, last, middle = 'Aman'} = wes 
console.log(middle)

// combine them
const  {w: width = 400, h: height = 500} = {w : 800}
console.log(width)