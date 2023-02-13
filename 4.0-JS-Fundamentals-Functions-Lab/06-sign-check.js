function signCheck(numOne, numTwo, numThree) {
    let result = (a, b, c) => {
        if (
            (numOne < 0 && numTwo < 0 && numThree < 0) ||
            (numOne < 0 && numTwo >= 0 && numThree >= 0) ||
            (numOne >= 0 && numTwo < 0 && numThree >= 0) ||
            (numOne >= 0 && numTwo >= 0 && numThree < 0)
        ) {
            return "Negative";
        } else {
            return "Positive";
        }
    };
    console.log(result());
}
signCheck(5, 12, -15);