function guineaPig(input) {
    let workArray = input.slice();

    let food = workArray.shift() * 1000;
    let hay = workArray.shift() * 1000;
    let cover = workArray.shift() * 1000;
    let weight = workArray.shift() * 1000;

    let hasToGoToTheStore = false;

    for (let i = 1; i <= 30; i++) {
        food -= 300;

        if (i % 2 === 0) {
            hay -= food * 0.05;
        }

        if (i % 3 === 0) {
            cover -= weight / 3;
        }

        if (food <= 0 || hay <= 0 || cover <= 0) {
            hasToGoToTheStore = true;
            break;
        }
    }

    return hasToGoToTheStore
        ? `Merry must go to the pet store!`
        : `Everything is fine! Puppy is happy! Food: ${(food  / 1000).toFixed(2)}, 
        Hay: ${(hay / 1000).toFixed(2)}, 
        Cover: ${(cover / 1000).toFixed(2)}.`;
}
console.log(guineaPig(["9",
"5",
"5.2",
"1"])
);
