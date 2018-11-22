async function getData(names) {
    const promises = names.map(name => fetch(`https://api.github.com/users/${name}`).then(r => r.json()));
    const people = await Promise.all(promises);
    console.log(people);
}
getData(['wesbos', 'stolinski', 'darcyclarke']);