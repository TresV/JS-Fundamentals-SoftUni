function maxSequenceOfEqualElements(array) {
  let arrayL = array.length;
  let maxSequence = [];

  for (let i = 0; i < arrayL; i++) {
    let sequence = [];
    for (let j = i; j < arrayL; j++) {
      if (array[i] === array[j]) {
        sequence.push(array[i]);
      } else {
        break;
      }
    }

    if (sequence.length > maxSequence.length) {
      maxSequence = [];
      for (let element of sequence) {
        maxSequence.push(element);
      }
    }
  }

  console.log(maxSequence.join(" "));
}