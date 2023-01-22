function roundingNumbers(number, precision) {
    
    if (precision > 15) {
        precision = 15;
    } 

    console.log(parseFloat(number.toFixed(precision)));
}
roundingNumbers(3.1415926535897932384626433832795,2)
roundingNumbers(10.5,3)
roundingNumbers(3.1415926535897932384626433832795,15)
roundingNumbers(12.5649413249846541981691635498465198165198165198165165,15)
roundingNumbers(10.5000000000000000000000000000000000000000000000000000000,19)
