function firstAndLastKNumbers(arr) {
    let count = arr.shift();

    let firstElements = arr.slice(0, count);
    let lastElements = arr.slice(arr.length - count);

    console.log(`${firstElements.join(' ')}\n${lastElements.join(' ')}`);
}
firstAndLastKNumbers([2, 7, 8, 9])
    