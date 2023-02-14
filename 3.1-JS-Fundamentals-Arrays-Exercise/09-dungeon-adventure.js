function dungeonCrawl(arr) {
    let dungeon = arr[0].split("|");
    let health = 100;
    let totalCoins = 0;
    let roomCount = 0;
    let coinsLooted = 0;
    let monsterName = 0;

    for (let i = 0; i < dungeon.length; i++) {
        let currentRoom = dungeon[i].split(" ");
        let encounter = currentRoom[0];
        let digit = Number(currentRoom[1]);
        roomCount++;

        if (encounter === "potion") {
            if (health + digit > 100) {
                digit = 100 - health;
                health = 100;
            } else {
                health += digit;
            }
            console.log(`You healed for ${digit} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (encounter === "chest") {
            coinsLooted = Number(digit);
            totalCoins += coinsLooted;
            console.log(`You found ${coinsLooted} coins.`);
        } else {
            monsterName = encounter;
            health -= digit;
            if (health > 0) {
                console.log(`You slayed ${monsterName}.`);
            } else {
                console.log(`You died! Killed by ${monsterName}.`);
                console.log(`Best room: ${roomCount}`);
                return;
            }
        }
    }
    console.log(`You\'ve made it!`);
    console.log(`Coins: ${totalCoins}`);
    console.log(`Health: ${health}`);
}

dungeonCrawl(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
