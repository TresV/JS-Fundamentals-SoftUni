function sortingByTwoCriteria(input) {
    input.sort((a, b) => {
        if(a.length - b.length === 0){
            return a.localeCompare(b);
        }
        return a.length - b.length
    });
    console.log(input.join("\n"));
}
sortingByTwoCriteria(["alpha", "beta", "gamma"]);
console.log("--------------------");
sortingByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
console.log("--------------------");
sortingByTwoCriteria(["Deny", "omen", "test", "Default"]);
