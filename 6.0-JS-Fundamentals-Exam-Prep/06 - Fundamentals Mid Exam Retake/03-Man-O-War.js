function manOWar(input) {
    let pirateShip = input.shift().split('>').map(x => Number(x));
    let warship = input.shift().split('>').map(x => Number(x));
    let maxHealth = Number(input.shift());

    for(let i = 0; i < input.length; i++){
        let tokens = input[i].split(' ');
        let command = tokens[0];
        let values = tokens.slice(1).map(x => Number(x));

        switch(command) {
            case 'Fire': fire(warship, values[0], values[1]); break;
            case 'Defend': defend(pirateShip, values[0], values[1], values[2]); break;
            case 'Repair': repair(pirateShip, values[0], values[1], maxHealth); break;
            case 'Status': status(pirateShip, maxHealth); break;
            case 'Retire': {
                console.log(`Pirate ship status: ${pirateShip.reduce((a, c) => a + c, 0)}`);
                console.log(`Warship status: ${warship.reduce((a, c) => a + c, 0)}`);
                return;
            }
        }
        if(isShipDead(warship)) {
            console.log(`You won! The enemy ship has sunken.`);
            break;
        }

        if(isShipDead(pirateShip)) {
            console.log(`You lost! The pirate ship has sunken.`);
            break;
        }
    }

    function isShipDead(ship) {
        let deadSection = ship.filter(x => x <= 0);
        return deadSection.length > 0;
    }

    function fire(warship, index, damage) {
        if(index >= 0 && index < warship.length) {
            warship[index] -= damage;
        }
    }
    function defend(pirateShip, startIndex, endIndex, damage) {
        if(startIndex >= 0 && startIndex < pirateShip.length && endIndex >= 0 && endIndex < pirateShip.length) {
            for (let i = startIndex; i <= endIndex; i++) {
                pirateShip[i] -= damage;
            }
        }
    }
    function repair(ship, index, heal, maxHealth) {
        if(index >= 0 && index < warship.length) {
            let missingHealth = maxHealth - ship[index];
            ship[index] += Math.min(missingHealth, heal);
        }
    }
    function status(ship) {
        let damagedSection = ship.filter(x => x < (maxHealth * 0.2));
        console.log(`${damagedSection.length} sections need repair.`);
    }
}
manOWar(
(["12>13>11>20>66",
"12>22>33>44>55>32>18",
"70",
"Fire 2 11",
"Fire 8 100",
"Defend 3 6 11",
"Defend 0 3 5",
"Repair 1 33",
"Status",
"Retire"])
);