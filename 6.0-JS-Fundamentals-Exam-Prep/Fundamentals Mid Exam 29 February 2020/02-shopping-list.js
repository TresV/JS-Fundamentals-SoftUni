function shoppingList(input) {
    let shoppingList = input.shift().split("!");

    for (const line of input) {
        if (line === "Go Shopping!") {
            break;
        }
        let tokens = line.split(" ");
        let command = tokens.shift();

        switch (command) {
            case "Urgent":{
                let urgentItem = tokens[0];
                if (!shoppingList.includes(urgentItem)) {
                    shoppingList.unshift(urgentItem);
                }
                break;
            }
            case "Unnecessary":{
                let unnecessaryItem = tokens[0];
                if (shoppingList.includes(unnecessaryItem)) {
                    shoppingList.splice(shoppingList.indexOf(unnecessaryItem), 1)
                }
                break;
            }
            case "Correct":{
                let [oldItem, newItem] = tokens;
                if (shoppingList.includes(oldItem)){
                    shoppingList.splice(shoppingList.indexOf(oldItem), 1, newItem)
                }
                break;
            }
            case "Rearrange":{
                let rearrangeItem = tokens[0];
                if (shoppingList.includes(rearrangeItem)) {
                    shoppingList.splice(shoppingList.indexOf(rearrangeItem), 1)
                    shoppingList.push(rearrangeItem)
                }
                break;
            }
        }   
    }
    console.log(shoppingList.join(', '));
}
shoppingList([
    "Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!",
]);
