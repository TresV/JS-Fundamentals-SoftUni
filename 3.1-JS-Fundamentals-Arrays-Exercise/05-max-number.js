function maxNumber(arr) {
    let resultArray = [];

    for (let i = 0; i < arr.length; i++) {
        let isBigger = true;
        let currentNumber = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            if (currentNumber <= arr[j]) {
                isBigger = false;
            }
        }

        if (isBigger) {
            resultArray.push(arr[i]);
        }
    }

    console.log(resultArray.join(' '));
}

maxNumber([14, 24, 3, 19, 15, 17]);