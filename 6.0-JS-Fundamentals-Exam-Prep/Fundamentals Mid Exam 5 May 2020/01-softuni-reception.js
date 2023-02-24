function softuniReceiption(input) {
    let arr = input.slice().map(Number);
    let studentCount = arr.pop();
    let totalEfficiency = arr.reduce((a, b) => a + b, 0);
    let hourCounter = 0;

    while (studentCount > 0) {
        studentCount -= totalEfficiency;
        hourCounter++;

        if (hourCounter > 0 && hourCounter % 4 === 0) {
            hourCounter++;
        }
    }

    console.log(`Time needed: ${hourCounter}h.`);
}

softuniReceiption(["5", "6", "4", "20"]);
// softuniReceiption(["1", "2", "3", "45"]);
// softuniReceiption(["3", "2", "5", "40"]);
