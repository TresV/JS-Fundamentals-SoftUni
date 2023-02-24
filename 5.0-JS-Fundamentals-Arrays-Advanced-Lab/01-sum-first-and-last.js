function sumFirstAndLastNumbers(arr) {
    let firstElement = Number(arr.shift());
    let lastElement = Number(arr.pop());
    let sumOfNumbers = firstElement + lastElement;
    return sumOfNumbers;

}
let arr = ["20", "30", "40"]
console.log(sumFirstAndLastNumbers(arr));