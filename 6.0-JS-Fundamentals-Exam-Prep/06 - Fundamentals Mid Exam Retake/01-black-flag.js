function blackFlag(input) {
    let arr = input.slice();
    let daysOfPlunder = Number(arr.shift());
    let dailyPlunder = Number(arr.shift());
    let expectedPlunder = Number(arr.shift());

    let accumulatedPlunder = 0;

    for (let i = 1; i <= daysOfPlunder; i++) {
        accumulatedPlunder += dailyPlunder;

        if (i % 3 === 0) {
            accumulatedPlunder += dailyPlunder * 0.5;
        }
        if (i % 5 === 0) {
            accumulatedPlunder *= 0.7;
        }
    }

    accumulatedPlunder >= expectedPlunder
        ? console.log(`Ahoy! ${accumulatedPlunder.toFixed(2)} plunder gained.`)
        : console.log(`Collected only ${((accumulatedPlunder / expectedPlunder) * 100).toFixed(2)}% of the plunder.`);
}
blackFlag((["10",
"20",
"380"]))