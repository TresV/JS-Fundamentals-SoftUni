function movingTarget(input) {
    let workArr = input.slice();
    let targets = workArr.shift().split(" ").map(Number);

    for (const line of workArr) {
        if (line === "End") {
            console.log(targets.join('|'));
        } else {
            let [command, index, tokens] = line.split(" ");
            index = Number(index);

            switch (command) {
                case "Shoot": {
                    if (index >= 0 && index <= targets.length) {
                        let power = Number(tokens)
                        targets[index] -= power;
                        if (targets[index] <= 0) {
                            targets.splice(index, 1);
                        }
                    }
                    break;
                }
                case "Add": {
                    if (index >= 0 && index < targets.length) {
                        let value = Number(tokens);
                        targets.splice(index, 0, value);
                    } else {
                        console.log("Invalid placement!");
                    }
                    break;
                }
                case "Strike": {
                    let radius = Number(tokens);
                    let indexBefore = index - radius;
                    let indexAfter = index + radius;
                    if (indexBefore >= 0 && indexAfter < targets.length) {
                        let indexesToRemove = indexAfter - indexBefore + 1;
                        targets.splice(indexBefore, indexesToRemove);
                    } else {
                        console.log("Strike missed!");
                    }
                    break;
                }
            }
        }
    }
}
movingTarget([
    "52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End",
]);
