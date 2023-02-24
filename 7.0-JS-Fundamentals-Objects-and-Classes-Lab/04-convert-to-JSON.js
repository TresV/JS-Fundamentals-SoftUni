function convertToJSON(firstName, lastName, hairColor){
    let personalInfo = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor,
    }

    console.log(JSON.stringify(personalInfo));
}
convertToJSON('George', 'Jones', 'Brown');