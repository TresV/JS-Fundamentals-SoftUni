function bitcoinMining(input) {
    let btcPrice = 11949.16;
    let oneGramOfGold = 67.51;
    let btcCounter = 0;
    let dayOfBuying = 0;
    let dayCounter = 0;
    let totalIncome = 0;

    for (let i = 0; i < input.length; i++) {
        dayCounter++;
        let currentIncome = oneGramOfGold * input[i];
        if (dayCounter % 3 === 0) {
            currentIncome *= 0.7;
        }
        totalIncome += currentIncome;

        if (currentIncome >= btcPrice) {
            btcCounter += Math.floor(totalIncome / btcPrice);
            totalIncome -= Math.floor(totalIncome / btcPrice) * btcPrice;
            if (dayOfBuying === 0) {
                dayOfBuying = dayCounter;
            }
        }
    }

    console.log(`Bought bitcoins: ${btcCounter}`);
    if (dayOfBuying > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfBuying}`);
    }
    console.log(`Left money: ${totalIncome.toFixed(2)} lv.`);
}
bitcoinMining([100, 200, 300])