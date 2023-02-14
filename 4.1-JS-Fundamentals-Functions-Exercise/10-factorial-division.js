function factorialDivision(num1, num2) {
    let firstFactorialNumber = calcFactorial(num1);
    let secondFactorialNumber = calcFactorial(num2);

    let finalCalc = (firstFactorialNumber / secondFactorialNumber).toFixed(2)

    console.log(finalCalc);

    function calcFactorial (num) {
        let res = 1;
        for (let i = num; i > 1; i -= 2) {
            res *= i * (i - 1)
        }
        return res;
    }
}

factorialDivision(5, 2)