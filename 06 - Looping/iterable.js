const noodles = ['Indomie','Sarimi','Sedapp']

// for
for (let index = 0; index < noodles.length; index++) {
    console.log(noodles[index]);
}

// forEach
noodles.forEach(element => {
    console.log(element)
});

//for in
for (const key in noodles) {
    if (noodles.hasOwnProperty(key)) {
        console.log(noodles[key])
    }
}

console.log("ForOF")
// for of
for (const mie of noodles) {
    console.log(mie)
    if(mie === 'Sarimi'){
        break //or just continue
    }
}