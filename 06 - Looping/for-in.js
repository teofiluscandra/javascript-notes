// if ou use object with key and values, lets stick in FOR IN

const bread = {
    merk : 'Sari Roti',
    size : 'Medium',
    taste : 'Sweat'
}

for (const key in bread) {
    if (bread.hasOwnProperty(key)) {
        const element = bread[key];
        console.log(element, key)
    }
}