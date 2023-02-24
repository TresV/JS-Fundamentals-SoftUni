function computerStore(input) {
    let arr = input.slice();
    let customerType = arr.pop();
    let totalPriceNoTax = 0;
    let specialDiscountedTotal = 0;

    for (let i = 0; i < arr.length; i++) {
        let productPrice = Number(arr[i]);
        if (productPrice <= 0) {
            console.log("Invalid price!");
            continue;
        }
        totalPriceNoTax += productPrice;
    }

    let taxes = totalPriceNoTax * 0.2;
    let totalPrice = totalPriceNoTax + taxes;

    if (customerType === "special") {
        specialDiscountedTotal = Math.abs(totalPrice * 0.1 - totalPrice);
    }

    if (totalPriceNoTax <= 0) {
        console.log("Invalid order!");
    } else {
        if (customerType === "special") {
            specialDiscountedTotal = Math.abs(totalPrice * 0.1 - totalPrice);
            console.log("Congratulations you've just bought a new computer!");
            console.log(`Price without taxes: ${totalPriceNoTax.toFixed(2)}$`);
            console.log(`Taxes: ${taxes.toFixed(2)}$`);
            console.log("-----------");
            console.log(`Total price: ${specialDiscountedTotal.toFixed(2)}$`);
        } else {
            console.log("Congratulations you've just bought a new computer!");
            console.log(`Price without taxes: ${totalPriceNoTax.toFixed(2)}$`);
            console.log(`Taxes: ${taxes.toFixed(2)}$`);
            console.log("-----------");
            console.log(`Total price: ${totalPrice.toFixed(2)}$`);
        }
    }
}
computerStore(["1050", "200", "450", "2", "18.50", "16.86", "special"]);
