function arrayModifier(input) {
    let arr = input.shift().split(" ").map(Number);

    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(" ");
        let command = tokens[0];
        let values = tokens.slice(1).map(Number);
        if (command === "end") {
            break;
        } else {
            let firstIndex = values[0];
            let secondIndex = values[1];
            let firstOperand = arr[firstIndex];
            let secondOperand = arr[secondIndex];
            switch (command) {
                case "swap": {
                    arr.splice(firstIndex, 1, secondOperand)
					arr.splice(secondIndex, 1, firstOperand)
                    break
                }
                case "multiply": {
                    arr[firstIndex] = firstOperand * secondOperand
					break
                }
                case "decrease": {
                    arr = arr.map(el => el - 1)
					break
                }
            }
        }
    }
    console.log(arr.join(', '));

}
arrayModifier([
    "23 -2 321 87 42 90 -123",
    "swap 1 3",
    "swap 3 6",
    "swap 1 0",
    "multiply 1 2",
    "multiply 2 1",
    "decrease",
    "end",
]);
