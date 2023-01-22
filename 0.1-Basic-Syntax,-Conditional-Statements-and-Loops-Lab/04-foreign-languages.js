// Solution 1
function foreignLanguages(country) {
    if (country == 'USA') {
        console.log('English');
    } else if (country == 'England') {
        console.log('English');
    } else if (country == 'Spain') {
        console.log('Spanish');
    } else if (country == 'Mexico') {
        console.log('Spanish');
    } else if (country == 'Argentina') {
        console.log('Spanish');
    } else {
        console.log('unknown');
    }
}

foreignLanguages('USA')

// Solution 2

function foreignLanguages(country) {
    if (country == 'USA' || country == 'England') {
        console.log('English');
    } else if (country == 'Spain' || country == 'Mexico' || country == 'Argentina') {
        console.log('Spanish');
    } else {
        console.log('unknown');
    }
}

foreignLanguages('USA')

// Solution 3

function foreignLanguages(country) {
	switch (country) {
		case "USA":
		case "England":
			console.log("English");
			break;
		case "Spain":
		case "Mexico":
		case "Argentina":
			console.log("Spanish");
			break;
		default:
			console.log("unknown");
			break;
	}
}

foreignLanguages("USA");