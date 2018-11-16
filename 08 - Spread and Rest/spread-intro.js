const featured = ['Deep Dish', 'Pepperoni', 'Hawaiian'];
const specialty = ['Meatzza', 'Spicy Mama', 'Margherita'];

const pizzas = [...featured,'veg',...specialty]

// pass by value
const fridayPizzas = [...pizzas]

// this is pass by reference
// const fridayPizza = pizza

