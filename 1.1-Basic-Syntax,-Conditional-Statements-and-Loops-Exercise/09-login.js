function login(string) {
    let username = string[0];
    let password = username.split('').reverse().join('');
    let notCorrect = false;

    for(let i = 1; i <= string.length; i++) {
        if(string[i] === password) {
            console.log(`User ${username} logged in.`);
            break;
        } else if (i === 4) {
            notCorrect = true;
            break;        
        } else {
            console.log('Incorrect password. Try again.');
        }
    }
    if (notCorrect) {
        console.log(`User ${username} blocked!`);
    }
}
login(['Acer','login','go','let me in','recA']);