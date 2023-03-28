function pwdGenerator(input) {
	let password = (input[0] + input[1]).toLocaleLowerCase();
	let key = input[2].toLocaleUpperCase();
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	let currentKeyIndex = 0;

	for (const char of password) {
		if (vowels.includes(char)) {
			password = password.replace(char, key[currentKeyIndex]);
            key[currentKeyIndex++]
			if (!key[currentKeyIndex]){
                currentKeyIndex = 0;
            }
		}
	}

    let finalPassword = password.split('').reverse().join('');
    console.log(`Your generated password is ${finalPassword}`);
}
pwdGenerator(['ilovepizza', 'ihatevegetables', 'orange']);
