function processOddNumbers(arr) {
    let newArr = arr.filter((x, i) => i % 2 !== 0);
    let doubledArr = newArr.map(x => x * 2);
    let result = [];
    for (let i = doubledArr.length - 1; i >= 0; i--) {
        result.push(doubledArr[i])
        
    }
    return result.join(' ');
}

console.log(processOddNumbers([3, 0, 10, 4, 7, 3]));


/* function processOddNumbers(arr) {
    let newArr = arr.filter((x, i) => i % 2 !== 0);
    let doubledArr = newArr.map(x => x * 2);
    doubledArr.reverse();

    return doubledArr.join(' ');
}

console.log(processOddNumbers([3, 0, 10, 4, 7, 3])); */


/* function processOddNumbers(arr) {
    let newArr = arr
        .filter((x, i) => i % 2 !== 0)
        .map(x => x * 2)
        .reverse();

    return newArr.join(' ');
}

console.log(processOddNumbers([3, 0, 10, 4, 7, 3])); */