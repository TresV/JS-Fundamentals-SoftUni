function mergeArrays(firstArr, secondArr) {
    let mergedArr = [];
    let firstArrayLength = firstArr.length;

    for (let i = 0; i < firstArrayLength; i++) {
        if (i % 2 === 0) {
            mergedArr.push(Number(firstArr[i]) + Number(secondArr[i]));
        } else {
            mergedArr.push(firstArr[i] + secondArr[i]);
        }
    }
    console.log(mergedArr.join(" - "));
}

mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
