const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('err')
    }, 1000)
})

p
    .then(data => console.log(data))
    .catch(err => console.log(err))