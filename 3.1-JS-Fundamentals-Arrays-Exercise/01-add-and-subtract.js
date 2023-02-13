function addAndSubtract(arr) {
    let resultArray = [];
    let inputArraySum = 0;
    let resultArraySum = 0;
    let inputLength = arr.length;
    for (let i = 0; i < inputLength; i++) {
        let currentNumber = arr[i];

        let odd = currentNumber - i;
        let even = currentNumber + i;

        if (currentNumber % 2 === 0) {
            resultArray.push(even);
        } else {
            resultArray.push(odd);
        }
        inputArraySum += currentNumber;
        resultArraySum += resultArray[i];
    }

    console.log(resultArray);
    console.log(inputArraySum);
    console.log(resultArraySum);
}

addAndSubtract([5, 15, 23, 56, 35]);
