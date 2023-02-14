function addAndSubtract (a, b, c) {
    function sumTwoNumbers(a, b) {
        return a + b;
    }

    function subtractTwoNumbers(a, b) {  //а - число; b - число; не визират sum или c
        return a - b;
    }

    let sum = sumTwoNumbers(a, b);
    let subtract = subtractTwoNumbers(sum, c)

    return subtract;
}

console.log(addAndSubtract(1, 17, 30));
