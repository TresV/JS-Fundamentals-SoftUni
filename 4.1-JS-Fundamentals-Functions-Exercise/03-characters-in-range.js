function charactersInRange (char1, char2) {
    let numFromChar1 = convertFromChatToNum(char1);
    let numFromChar2 = convertFromChatToNum(char2);

    let startIndex = smallestOfTwoNumbers (numFromChar1, numFromChar2);
    let endIndex = biggestOfTwoNumbers (numFromChar1, numFromChar2);;

    let buff = "";

    for (let i = startIndex + 1; i < endIndex; i++) {
        buff = concatenateString(buff, convertFromNumToChar(i));
    }

    function smallestOfTwoNumbers (num1, num2) {
        return Math.min(num1, num2);
    }
    function biggestOfTwoNumbers (num1, num2) {
        return Math.max(num1, num2);
    }
    
    function convertFromChatToNum (char) {
        return char.charCodeAt(0);
    }
    
    function convertFromNumToChar (num) {
        return String.fromCharCode(num);
    }
    
    function concatenateString(buff, string) {
        buff += string + " ";
        return buff;
    }
    
    console.log(buff);
}



charactersInRange('#', ":")