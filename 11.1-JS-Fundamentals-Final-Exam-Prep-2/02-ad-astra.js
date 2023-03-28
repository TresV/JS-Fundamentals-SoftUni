function stockManager(input){
    let text = input.shift();
    let totalCalories = 0;
    let pattern = /(\#|\|)(?<name>[A-Z+ a-z]+)\1(?<exp>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<cal>[0-9]+)\1/g;
    let foodInStock = pattern.exec(text);
    let products = [];
    while (foodInStock) {
        products.push({
			item: foodInStock.groups.name,
			date: foodInStock.groups.exp,
			calories: foodInStock.groups.cal,
		});
        totalCalories += Number(foodInStock.groups.cal)
        foodInStock = pattern.exec(text);
    }
    let calsNeeded = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${calsNeeded} days!`);
    for (const el of products) {
		console.log(
			`Item: ${el.item}, Best before: ${el.date}, Nutrition: ${el.calories}`
		);
	}
}
stockManager([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ]
    )
// stockManager(["Hello|#Invalid food#19/03/20#450|$5*(@"]);
