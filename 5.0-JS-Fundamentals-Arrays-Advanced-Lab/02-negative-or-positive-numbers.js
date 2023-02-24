function negativeOrPositiveNumbers(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let element = Number(arr[i]);
        if (element < 0) {
            result.unshift(element);
        } else {
            result.push(element);
        }
    }
    return result.join('\n');
}

console.log(negativeOrPositiveNumbers(['7', '-2', '8', '9']));


//Alternative with for of

function negativeOrPositiveNumbersAlt(arr) {
    let res = [];
    for (let num of arr) {
        if (num < 0) {
            res.unshift(num); //Insert at the start
        } else {
            res.push(num); //Append(push) to the end
        }
    }
    console.log(res.join('\n'));
}

negativeOrPositiveNumbersAlt(['7', '-2', '8', '9'])