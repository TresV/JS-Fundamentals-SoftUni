function biscuitFactory(input) {
    let workArr = input.slice();
    let quantityPerWorker = workArr.shift();
    let workerCount = workArr.shift();
    let biscuitCountCompetitor = workArr.shift(); // per 30 days
    let dailyProduction = 0;
    let monthlyProduction = 0;

    for (let i = 1; i <= 30; i++) {
        dailyProduction = workerCount * quantityPerWorker;

        if (i % 3 === 0) {
            dailyProduction = Math.floor(dailyProduction * 0.75);
        }
        monthlyProduction += dailyProduction;
    }

    let difference = (Math.abs(biscuitCountCompetitor - monthlyProduction) / biscuitCountCompetitor) * 100;

    console.log(`You have produced ${monthlyProduction} biscuits for the past month.`);
    
    if (monthlyProduction > biscuitCountCompetitor) {
        console.log(`You produce ${difference.toFixed(2)} percent more biscuits.`);
    } else {
        console.log(`You produce ${difference.toFixed(2)} percent less biscuits.`);
    }
}
// biscuitFactory(["78", "8", "16000"])
// biscuitFactory(["65", "12", "26000"])
biscuitFactory(["163", "16", "67020"]);
