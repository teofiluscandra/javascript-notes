function breathe(amount) {
    return new Promise((resolve, reject) => {
        if(amount < 500) {
            reject('Too small');
        }
        setTimeout(() => resolve(`Done ${amount}`), amount);
    })
}

function catchErrors(fn) {
    return function(...args) {
        return fn(...args).catch((err) => {
            console.log(err);
        })
    }
}

async function go(name, last){
    console.log(`Starting for ${name} ${last}`);
    const res = await breathe(1000);
    console.log(res)
    const res2 = await breathe(300);
    console.log(res2)
}

const wrappedFunction = catchErrors(go);
wrappedFunction('Teofilus', 'Candra')
