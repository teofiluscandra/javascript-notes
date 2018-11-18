const destinations = new Promise(resolve => {
    setTimeout(() => {
        resolve({
            name: 'Kedai Mojook', 
            address: 'Tukad Barito'
        })
    }, 1000)
})

const news = new Promise(resolve => {
    resolve({
        title: 'Berita',
        id: 2
    })
})

Promise
    .all([destinations, news])
    .then(data => {
        console.log(data)
    })

const fetch = require('node-fetch')

const users = fetch('https://api.github.com/users/github')
const gets = fetch('https://httpbin.org/get')

Promise
    .all([users, gets])
    .then(response => {
        return Promise.all(response.map(res => res.json()))
    })
    .then(data => {
        console.log(data)
    })