function muOnline(arr) {
    let dungeon = arr.split("|");
    let health = 100;
    let counterRooms = 0;
    let allCoins = 0;

    for (let i = 0; i < dungeon.length; i++) {
        let room = dungeon[i];
        let tokens = room.split(" ");
        let command = tokens[0];
        let num = Number(tokens[1]);
        counterRooms++;
        switch (command) {
            case "potion": {
                if (health + num > 100) {
                    num = 100 - health;
                    health = 100;
                } else {
                    health += num;
                }

                console.log(`You healed for ${num} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            }
            case "chest": {
                allCoins += num;
                console.log(`You found ${num} bitcoins.`);
                break;
            }
            default: {
                health -= num;
                if (health > 0) {
                    console.log(`You slayed ${command}.`);
                } else {
                    console.log(`You died! Killed by ${command}.\nBest room: ${counterRooms}`);
                    return;
                }
            }
            break;
        }
    }
    console.log(`You've made it!\nBitcoins: ${allCoins}\nHealth: ${health}`);
}
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
