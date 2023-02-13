function calculator(numOne, numTwo, operator) {
    let result;

    switch (operator) {
        case "multiply":
            result = (a, b) => numOne * numTwo;
            break;
        case "divide":
            result = (a, b) => numOne / numTwo;
            break;
        case "add":
            result = (a, b) => numOne + numTwo;
            break;
        case "subtract":
            result = (a, b) => numOne - numTwo;
            break;
    }

    console.log(result());
}
calculator(5, 5, "multiply");

function simpleCalculator(numOne, numTwo, operator) {
    let res;

    switch (operator) {
        case "multiply":
            res = (x, y) => numOne * numTwo;
            break;
        case "divide":
            res = (x, y) => numOne / numTwo;
            break;
        case "add":
            res = (x, y) => numOne + numTwo;
            break;
        case "subtract":
            res = (x, y) => numOne - numTwo;
            break;
    }
    console.log(res());
}
simpleCalculator(5, 5, "multiply");
