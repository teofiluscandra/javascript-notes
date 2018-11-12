function convertCurrency(amount) {
    const converted = {
        USD: amount * 0.76,
        GPB: amount * 0.53,
        AUD: amount * 1.01,
        MEX: amount * 13.30
    };
    return converted;
}

const {USD, GPB} = convertCurrency(100)
console.log(USD)

function tipCalc({ total = 100, tip = 0.15, tax = 0.13 } = {}) {
    return total + (tip * total) + (tax * total);
}

const bill = tipCalc({ tip: 0.20, total: 200 });
console.log(bill);