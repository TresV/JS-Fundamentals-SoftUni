function stringSub(word, text) {
	const workText = text.split(' ');

	for (const token of workText) {
		if (word.toLowerCase() === token.toLowerCase()) {
			return console.log(word);
		}
	}

	console.log(`${word} not found!`);
}
stringSub('javascript', 'JavaScript is the best programming language');
