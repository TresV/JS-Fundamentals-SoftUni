function emojiExtract(input){

    let text = input.shift();
    let emojiCount = 0;
    let threshold = 1;
    let coolEmojis = [];
    let getDigits = text.match(/\d/g);
    for (const match of getDigits) {
        let digit = Number(match[0]);
        threshold *= digit
    }

    let getEmoji = text.matchAll(/(\:{2}|\*{2})(?<name>[A-Z][a-z]{2,})\1/g);
    for (const emojiMatch of getEmoji) {
        let emoji = emojiMatch[0]
        let emojiName = emojiMatch.groups.name;
        emojiCount++;

        let emojiCoolness = 0;
        for (let i = 0; i < emojiName.length; i++) {
            emojiCoolness += emojiName.charCodeAt(i);
        }   

        if(emojiCoolness >= threshold){
            coolEmojis.push(emoji);
        }
    }

    console.log(`Cool threshold: ${threshold}`);
    console.log(`${emojiCount} emojis found in the text. The cool ones are:`);
    for (const emoji of coolEmojis) {
        console.log(emoji);
    }
}
emojiExtract(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);