function evenAndOddSubtraction(numbers) {
    let diff = 0;
    let evenSum = 0;
    let oddSum = 0;

    for (let digits of numbers) {
        let digit = Number(digits);

        if (digit % 2 == 0) {
            evenSum += digit;
        } else {
            oddSum += digit;
        }
    }

    diff = evenSum - oddSum
    console.log(diff);
}
evenAndOddSubtraction([3,5,7,9])
