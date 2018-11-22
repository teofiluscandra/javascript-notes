// generator function is a function that we can exited and re-entered later

function* listPeople() {
    yield('Satu');
    yield('Dua');
    yield('Tiga');
}

const people = listPeople();
console.log(people.next())
console.log(people.next())
console.log(people.next())
console.log(people.next())