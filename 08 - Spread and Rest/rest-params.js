function convertCurrency(rate, ...amounts) {
    return amounts.map(amount => amount * rate)
}

const amounts = convertCurrency(1.44, 10,20,30,40)
console.log(amounts)

const team = ['A', 'B', 'C', 'D', 'E']
const [captain, assistant, ...player] = team
console.log(player)