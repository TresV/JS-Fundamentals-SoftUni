/* 4.	Integer and Float
You will receive 3 numbers. Your task is to find their sum and print result to the console in the following format:
`{sum} - {type of the number (Integer or Float)}`
*/

function integerAndFloat (firstNum, secondNum, thirdNum) {
    let sum = firstNum + secondNum + thirdNum;

    sum % 1 === 0 ? sum += ' - Integer' : sum += ' - Float'
    console.log(sum);
}

integerAndFloat(100, 200, 303)