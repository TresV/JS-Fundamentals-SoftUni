function treasureHunt(input) {
    let items = input.shift().split("|");
    for (const line of input) {
        if (line === "Yohoho!") {
            break;
        }
        let tokens = line.split(" ");
        let command = tokens.shift();

        switch (command) {
            case "Loot":{
                for (item of tokens) {
                    if(!items.includes(item)){
                        items.unshift(item);
                    }
                }
            }
            break;
            case "Drop":{
                let index = Number(tokens[0]);
                if(index >= 0 && index < items.length) {
                    items.push(items.splice(index, 1));
                }
                break;
            }
            case 'Steal':
                let count = Number(tokens[0]);
                const stolen = [];

                if (count > items.length) {
                    count = items.length;
                }

                for (let i = 0; i < count; i++) {
                    stolen.push(items.pop());
                }

                console.log(stolen.reverse().join(', '));
                break;
        }   
    }
    if (items.length > 0) {
        console.log(`Average treasure gain: ${(items.join('').length / items.length).toFixed(2)} pirate credits.`);
    } else {
        console.log('Failed treasure hunt.');
    }
}
treasureHunt([
    "Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!",
]);
