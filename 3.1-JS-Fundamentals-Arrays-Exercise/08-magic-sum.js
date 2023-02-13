
function magicSum(array, num) {
    let arrayL = array.length;
    let validPair = "";
    let currentArray = [];
  
    for (let i = 0; i < arrayL; i++) {
      for (let j = i + 1; j < arrayL; j++) {
        if (array[i] + array[j] === num) {
          validPair = `${array[i]} ${array[j]}`;
          currentArray.push(validPair);
        }
      }
    }
    console.log(currentArray.join('\n'));
  }
  magicSum([1, 7, 6, 2, 19, 23], 8);