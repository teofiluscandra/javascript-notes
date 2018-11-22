const brunch = new Set();
brunch.add('a')
brunch.add('b')
brunch.add('c')

const line = brunch.values();
console.log(line.next().value);
console.log(line.next().value);

brunch.add('d')
brunch.add('e')

console.log(line.next().value);
console.log(line.next().value);
console.log(line.next().value);
