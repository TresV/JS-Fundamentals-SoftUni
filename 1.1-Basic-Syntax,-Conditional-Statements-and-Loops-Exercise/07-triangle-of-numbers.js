function triangleOfNumbers(number) {

    for (let i = 1; i <= number; i++) {
        let num = "";
        for (let j = 1; j <= i; j++) {
            num += `${i} `;
        }
        console.log(num);
    }

}

triangleOfNumbers(5);
