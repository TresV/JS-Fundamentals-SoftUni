/* 
3.	Right Place
You will receive 3 parameters (string, char, string).
The first string will be a word with a missing char replaced with an underscore '_'.
You have to replace the missing character (underscore) of the first string with the character passed as the second parameter and compare the result with the second string.
If they are equals, you should print "Matched", otherwise print "Not Matched".
*/

//Solution 1

function rightPlace(str, char, result) {
 
    let res = str.replace('_',char);
    if (res === result) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}

rightPlace('Str_ng', 'I', 'Strong')
rightPlace('Str_ng', 'i', 'String')

// Solution 2

function rightPlace2 (str, char, result) {
    let res = str.replace('_', char);
    let output = res === result ? 'Matched': 'Not Matched';

    console.log(output);
}

rightPlace2('Str_ng', 'I', 'Strong')
rightPlace2('Str_ng', 'i', 'String')