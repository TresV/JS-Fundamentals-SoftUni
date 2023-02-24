function theLift(input) {
    let arr = input.slice();
    let peopleInQueue = Number(arr[0]);
    let wagons = arr[1].split(" ").map(Number);
    let peopleToAddFromQueue = 0;

    for (let i = 0; i < wagons.length; i++) {
        let wagonCurrentCapacity = wagons[i];

        if (wagonCurrentCapacity < 4) {
            let freeSeats = 4 - wagonCurrentCapacity;

            if (freeSeats > peopleInQueue) {
                peopleToAddFromQueue = peopleInQueue;
            } else {
                peopleToAddFromQueue =
                    peopleInQueue - (peopleInQueue - freeSeats);
            }

            wagons[i] = wagonCurrentCapacity + peopleToAddFromQueue;
            peopleInQueue -= peopleToAddFromQueue;
        }

        if (peopleInQueue === 0) {
            break;
        }
    }

    let peopleInLift = wagons.reduce((a, b) => a + b, 0);
    let liftCapacity = wagons.length * 4;

    if (peopleInLift < liftCapacity && peopleInQueue === 0) {
        console.log(`The lift has empty spots!\n${wagons.join(" ")}`);
    } else if (peopleInLift === liftCapacity && peopleInQueue > 0) {
        console.log(
            `There isn't enough space! ${peopleInQueue} people in a queue!\n${wagons.join(
                " "
            )}`
        );
    } else if (peopleInLift === liftCapacity && peopleInQueue === 0) {
        console.log(lift.join(" "));
    }
}
theLift(["15", "0 0 0 0 0"]);
// theLift(["20", "0 2 0"]);

function theLift(input) {
    let queue = Number(input[0]);
    let lift = input[1].split(" ").map(Number);
    let peopleToAddFromQueue = 0;

    for (let i = 0; i < lift.length; i++) {
        let wagon = lift[i];

        if (wagon < 4) {
            let freeSeats = 4 - wagon;

            if (freeSeats > queue) {
                peopleToAddFromQueue = queue;
            } else {
                peopleToAddFromQueue = queue - (queue - freeSeats);
            }

            lift[i] = wagon + peopleToAddFromQueue;
            queue -= peopleToAddFromQueue;
        }

        if (queue === 0) {
            break;
        }
    }

    let peopleInLift = lift.reduce((a, b) => a + b, 0);
    let liftCapacity = lift.length * 4;

    if (peopleInLift < liftCapacity && queue === 0) {
        console.log(`The lift has empty spots!\n${lift.join(" ")}`);
    } else if (peopleInLift === liftCapacity && queue > 0) {
        console.log(
            `There isn't enough space! ${queue} people in a queue!\n${lift.join(
                " "
            )}`
        );
    } else if (peopleInLift === liftCapacity && queue === 0) {
        console.log(lift.join(" "));
    }
}
