function counterStrike(input) {
    let arr = input.slice();
    let energy = arr.shift();
    let winsCounter = 0;

    for (let command of arr) {
        if (command == "End of battle") {
            console.log(`Won battles: ${winsCounter}. Energy left: ${energy}`);
            break;
        }
        command = Number(command);

        if (energy >= command) {
            energy -= command;
        } else {
            console.log(
                `Not enough energy! Game ends with ${winsCounter} won battles and ${energy} energy`
            );
            break;
        }
        winsCounter++;
        if (winsCounter > 0 && winsCounter % 3 === 0) {
            energy += winsCounter;
        }
    }
}
// counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
counterStrike(["200", "54", "14", "28", "13", "End of battle"]);
