function printAndSum(num1, num2) {
    let digits = "";
    let counter = 0;

    for(let i = num1; i <= num2; i++) {
        digits += i + " ";
        counter = counter + i;
        
    }
    console.log(digits);
    console.log(`Sum: ${counter}`);
}

printAndSum(5, 10);