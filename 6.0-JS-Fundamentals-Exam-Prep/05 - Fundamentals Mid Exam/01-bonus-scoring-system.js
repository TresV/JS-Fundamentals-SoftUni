function bonusScoringSystem(input) {
    let arr = input.slice();
    let studentCount = Number(arr.shift());
    let lecturesCount = Number(arr.shift());
    let additionalBonus = Number(arr.shift());
    let totalAttendence = 0;
    let totalBonus = 0;

    for (let i = 0; i < arr.length; i++) {
        let studentAttendance = Number(arr[i]);
        let bonusCalc = Math.ceil(studentAttendance / lecturesCount * (5 + additionalBonus));
        if (bonusCalc >= totalBonus) {
            totalBonus = bonusCalc;
            totalAttendence = studentAttendance;
        }
    }
    
    // totalBonus.sort((a,b) => a - b);
    // let maxBonus = totalBonus.reduce((a, b) => Math.max(a, b), -Infinity);
    console.log(maxBonus);
    console.log(`Max Bonus: ${Math.max(...totalBonus)}`); //(...) spread operator
    console.log(`The student has attended ${lecturesCount} lectures`);
    // console.log(`Max Bonus: ${Math.ceil(totalBonus)}.\nThe student has attended ${totalAttendence} lectures.`);
}
bonusScoringSystem(["5", "25", "30", "12", "19", "24", "16", "20"]);
