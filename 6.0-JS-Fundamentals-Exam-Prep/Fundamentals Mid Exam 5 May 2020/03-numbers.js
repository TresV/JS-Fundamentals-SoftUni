function numbers(input){
    let workArr = input.split(' ').map(Number);
    const averageNumber = workArr.reduce((a, b) => a + b, 0) / workArr.length;
    let result = [];

    for (let i = 0; i < workArr.length; i++){
        let currentNumber = workArr[i];
        if (currentNumber > averageNumber) {
            result.push(currentNumber)
        }
    }

    if(result.length > 0){
        let sorted = result.sort((a, b) => b - a).slice(0, 5)
        console.log(sorted.join(' '));
    } else {
        console.log('No');
    }
}
numbers('10 20 30 40 50')
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')
numbers('-1 -2 -3 -4 -5 -6')
numbers('1')