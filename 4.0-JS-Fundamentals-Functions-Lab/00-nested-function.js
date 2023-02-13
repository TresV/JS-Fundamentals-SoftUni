function printCertificate(grade, names) {
    //Get Full Name
    let fullName = printFullName(names);

    //Get formatted grade
    let formattedGrade = formatGrade(grade);

    //Print Result
    printHeader();
    console.log(fullName);
    console.log(formattedGrade);

    function printHeader() {
        console.log("~~~-   {@}   -~~~");
        console.log("~- Certificate -~");
        console.log("~~~-  ~---~  -~~~");
    }

    function printFullName(names) {
        return `${names[0]} ${names[1]}`;
    }

    function formatGrade(grade) {
        let gradeAnotation = "";

        if (grade < 3) {
            gradeAnotation = "Fail";
        } else if (grade < 3.5) {
            gradeAnotation = "Poor";
        } else if (grade < 4.5) {
            gradeAnotation = "Good";
        } else if (grade < 5.5) {
            gradeAnotation = "Very good";
        } else {
            gradeAnotation = "Excellent";
        }

        if (gradeAnotation == "Fail") {
            return `${gradeAnotation} (2)`;
        } else {
            return `${gradeAnotation} (${grade.toFixed(2)})`;
        }
    }
}

printCertificate(5.25, ["Peter", "Carter"]);
