function equalSums(arr) {
    let foundIndex = "no";
    let arrLength = arr.length;

    for (let i = 0; i < arrLength; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let l = 0; j < i; l++) {
            leftSum += arr[l];
        }

        for (let r = i + 1; r < arrLength; r++) {
            rightSum += arr[r];
        }
    }
}
equalSums([1, 2, 3, 3]);
