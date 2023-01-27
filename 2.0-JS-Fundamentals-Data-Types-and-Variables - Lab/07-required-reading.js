function requiredReading(numberOfPages, pagesPerHour, daysRequired) {
    let result = (numberOfPages / pagesPerHour) / daysRequired;
    console.log(result);
}

requiredReading(212, 20, 2);
