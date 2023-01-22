function vacation(groupCount, groupType, dayType) {
	let price = 0;
	let totalPrice = 0;

	switch (groupType) {
		case "Students":
			if (dayType === "Friday") {
				price = 8.45;
			} else if (dayType === "Saturday") {
				price = 9.8;
			} else if (dayType === "Sunday") {
				price = 10.46;
			}
			break;
		case "Business":
			if (dayType === "Friday") {
				price = 10.9;
			} else if (dayType === "Saturday") {
				price = 15.6;
			} else if (dayType === "Sunday") {
				price = 16;
			}
			break;
		case "Regular":
			if (dayType === "Friday") {
				price = 15;
			} else if (dayType === "Saturday") {
				price = 20;
			} else if (dayType === "Sunday") {
				price = 22.50;
			}
			break;
	}

    totalPrice = groupCount * price;

	if (groupType === "Students" && groupCount >= 30) {
        totalPrice = groupCount * price;
		totalPrice = totalPrice *= 0.85;

	} else if (groupType === "Business" && groupCount >= 100) {
		groupCount = groupCount - 10;
        totalPrice = groupCount * price;
	} else if (groupType === "Regular" && groupCount >= 10 && groupCount <= 20) {
        totalPrice = groupCount * price;
		totalPrice = totalPrice *= 0.95;

	}

	console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");
