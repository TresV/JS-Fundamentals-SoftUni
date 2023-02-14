function oddAndEvenSums(num) {
    let numberToString = String(num);
    let oddSum = 0;
    let evenSum = 0;
    for (let char of numberToString) {
        let currentNum = Number(char);
        if (currentNum % 2 === 0) {
            evenSum += currentNum;
        } else {
            oddSum += currentNum;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSums(100435);
