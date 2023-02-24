function distinctArray(input) {
    let uniqueArr = [];
    for (const el of input) {
        if (uniqueArr.indexOf(el) === -1) {
            uniqueArr.push(el)
        }
    }
    return uniqueArr.join(' ')
}
console.log(distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]))

function distinctArray(input) {
    let uniqueArr = [];
    for (const el of input) {
        if (!uniqueArr.includes(el)) {
            uniqueArr.push(el)
        }
    }
    return uniqueArr.join(' ')
}
console.log(distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]))