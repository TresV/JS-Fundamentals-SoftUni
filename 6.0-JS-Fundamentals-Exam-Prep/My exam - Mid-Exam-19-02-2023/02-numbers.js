function numbers(arr) {
    let sequence = arr.shift().split(" ").map(Number);
    let command = arr.shift();

    while (command != "Finish") {
      command = command.split(" ");
      let value = Number(command[1]);
      if (command[0] == "Add") {
        sequence.push(value);
      } else if (command[0] == "Remove") {
        if (sequence.includes(value)) {
          let index = sequence.indexOf(value);
          sequence.splice(index, 1);
        }
      } else if (command[0] == "Replace") {
        let replacement = Number(command[2]);
        if (sequence.includes(value)) {
          let index = sequence.indexOf(value);
          sequence.splice(index, 1, replacement);
        }
      } else if (command[0] == "Collapse") {
        sequence = sequence.filter((a) => a >= value);
      }
      command = arr.shift();
    }
    console.log(sequence.join(" "));
}
numbers(["1 4 5 19", "Add 1", "Remove 4", "Finish"]);
// numbers(["1 20 -1 10", "Collapse 8", "Finish"]);
// numbers(["5 9 70 -56 9 9", "Replace 9 10", "Remove 9", "Finish"]);
