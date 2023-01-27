function sumEvenNumbers(input) {

    for (let i = 0; i < input.length; i++) {
        input[i] = Number(input[i]);
    }

    let sum = 0;
    for (let num of input) {
        if(num % 2 == 0) {
            sum += num;
        }
    }

    console.log(sum);
}
sumEvenNumbers(['2','4','6','8','10']);

// Alternative

/* function sumEvenNumber (numbers) {
    let evenSum = 0;
    for (let textNumber of numbers) {
        let digit = Number(textNumber);

        if (digit % 2 == 0) {
            evenSum += digit;
        }
    }
    console.log(evenSum);
}

sumEvenNumbers(['2','4','6','8','10']); */
