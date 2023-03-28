function phoneBook(list){
    let phoneBook = {};

    list.forEach(element => {
        let tokens = element.split(' ');
        let name = tokens[0];
        let phone = tokens[1];
        phoneBook[name] = phone;
    });

    for (const key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);
    }
}
// phoneBook(['Tim 0834212554',
// 'Peter 0877547887',
// 'Bill 0896543112',
// 'Tim 0876566344']
// )



function printPhoneBook(input){
    let phoneBook = {};

    for(const entry of input){
        let [name, phone] = entry.split(' ');
        phoneBook[name] = phone;
    }
    for (const name in phoneBook) {
        console.log(`${name} -> ${phoneBook[name]}`);
    }
}
printPhoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)