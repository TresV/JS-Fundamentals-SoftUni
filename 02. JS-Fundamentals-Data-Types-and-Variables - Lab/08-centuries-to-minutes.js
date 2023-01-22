function centuriesToMinutes(centuries) {
    let daysInYear = 365.2422;
    let years = centuries * 100;
    let days = Math.trunc(years * daysInYear);
    let hours = days * 24;
    let minutes = hours * 60;

    console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
}

centuriesToMinutes(1)