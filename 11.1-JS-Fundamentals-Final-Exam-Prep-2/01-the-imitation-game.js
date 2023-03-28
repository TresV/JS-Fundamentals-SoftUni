function codeDecrypter(input) {
	let message = input.shift();
	let line = input.shift();

    let tempMsg = '';
	while (line !== 'Decode') {
		let instructions = line.split('|');
		let command = instructions[0];

		switch (command) {
			case 'ChangeAll':{
                let substring = instructions[1];
                let replacement = instructions[2];
                
                while(message.includes(substring)){
                    tempMsg = message.replace(substring, replacement);
                    message = tempMsg;
                }
            break;
            }
			case 'Insert':{
                let index = Number(instructions[1]);
                let value = instructions[2];

                tempMsg = message.split('');
                tempMsg.splice(index, 0, value);
                message = tempMsg.join('');
            break;
            }
			case 'Move':{
                let numberOfLetters = Number(instructions[1]);
                let lettersToMove = message.substring(0, numberOfLetters);
                tempMsg = message.replace(lettersToMove, '');
                tempMsg += lettersToMove;
                message = tempMsg;
            break;
            }
		}
        line = input.shift();
	}
    console.log(`The decrypted message is: ${message}`);
}
codeDecrypter(['zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode']);
