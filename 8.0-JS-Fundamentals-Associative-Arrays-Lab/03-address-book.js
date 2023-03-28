function sortAddressBook(input) {
    let list = {};
    for (const el of input) {
        let tokens = el.split(":");
        let name = tokens[0];
        let address = tokens[1];
        list[name] = address;
    }

    let entries = Object.entries(list).sort((a, b) => a[0].localeCompare(b[0]));

    for (const [name, address] of entries) {
        console.log(`${name} -> ${address}`);
    }
}
sortAddressBook([
    "Bob:Huxley Rd",
    "John:Milwaukee Crossing",
    "Peter:Fordem Ave",
    "Bob:Redwing Ave",
    "George:Mesta Crossing",
    "Ted:Gateway Way",
    "Bill:Gateway Way",
    "John:Grover Rd",
    "Peter:Huxley Rd",
    "Jeff:Gateway Way",
    "Jeff:Huxley Rd",
]);
