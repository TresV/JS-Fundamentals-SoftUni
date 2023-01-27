function reverseArray(count, numbers) {
    let reversedNumbers = [];

    for (let i = 0; i < count; i++) {
        // result[count - 1 - i] = numbers[i];
        reversedNumbers[i] = numbers[count - 1 - i];
    }

    let result = '';

    for (let i = 0; i < reversedNumbers.length; i++) {
        result += reversedNumbers[i];

        if (i < reversedNumbers.length - 1) {
            result += ' ';
        }
    }
    console.log(result);
}
reverseArray(3, [10, 20, 30, 40, 50]);
