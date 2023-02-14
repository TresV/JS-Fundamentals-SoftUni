function loadingBar(num) {
    let arr = [];
    let completion = "%".repeat(num / 10);
    let remainder = ".".repeat(10 - completion.length);

    if (remainder.length === 0) {
        console.log("100% Complete!");
        console.log("[%%%%%%%%%%]");
    } else {
        console.log(`${num}% [${completion}${remainder}]\nStill loading...`);
    }
}
loadingBar(30);
