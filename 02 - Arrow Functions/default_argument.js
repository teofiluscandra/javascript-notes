// default argument in function
function calculateCoffeeShop(total, tax, tip){
    return total + (total * tax) + (total * tip)
}
const total = calculateCoffeeShop(100, 0.10, 0.15)

function calculateCoffeeShop2(total, tax=0.10, tip=0.15){
    return total + (total * tax) + (total * tip)
}
const total2 = calculateCoffeeShop2(100)
console.log(total2)