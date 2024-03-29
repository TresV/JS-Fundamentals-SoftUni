function raceInfoProcess(input) {
	let racersArray = input.shift().split(', ');
	let raceObject = {};
	const patternName = /[A-Za-z]+/g;
	const patternDistance = /\d+/g;

	let command = input.shift();

	while (command !== 'end of race') {
		const currentName = command.match(patternName).join('');
		const currentDistance = command.match(patternDistance).join('');

		if (racersArray.includes(currentName)) {
			let distance = 0;

			for (const digit of currentDistance) {
				distance += Number(digit);
			}

			if (!raceObject.hasOwnProperty(currentName)) {
				raceObject[currentName] = distance;
			} else {
				raceObject[currentName] += distance;
			}
		}

		command = input.shift();
	}

	let sortedRacers = Object.entries(raceObject).sort((a, b) => b[1] - a[1]);
	const firstPlace = sortedRacers[0][0];
	const secondPlace = sortedRacers[1][0];
	const thirdPlace = sortedRacers[2][0];

	console.table(`1st place: ${firstPlace}`);
	console.table(`2nd place: ${secondPlace}`);
	console.table(`3rd place: ${thirdPlace}`);
}
raceInfoProcess([
	'George, Peter, Bill, Tom',
	'G4e@55or%6g6!68e!!@ ',
	'R1@!3a$y4456@',
	'B5@i@#123ll',
	'G@e54o$r6ge#',
	'7P%et^#e5346r',
	'T$o553m&6',
	'end of race',
]);
