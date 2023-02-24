function phoneShop(input){
    let phoneList = input.shift().split(', ');

    for(const line of input){
        if(line === 'End'){
            console.log(phoneList.join(', '));
            return;
        }
        let phone = line.split(' - ');
        let command = phone.shift()

        switch(command){
            case 'Add':{
                let phoneToAdd = phone[0]
                if(!phoneList.includes(phoneToAdd)){
                    phoneList.push(phoneToAdd);
                } else {
                    continue
                }
            }
                break;
            case 'Remove':{
                let phoneToRemove = phone[0]
                if(phoneList.includes(phoneToRemove)){
                    phoneList = phoneList.filter(e => e !== phoneToRemove);
                } else {
                    continue
                }
            }
                break;
            case 'Bonus phone':
                let oldPhone = phone[0].split(':')[0];
                let replacement = phone[0].split(':')[1];
                if(phoneList.includes(oldPhone)){
                    phoneList.splice((1 - phone.indexOf(oldPhone)), 0, replacement);
                } else {
                    continue
                }
                break;
            case 'Last':
                let phoneToPush = phone[0]
                if(phoneList.includes(phoneToPush)){
                    phoneList = phoneList.filter(e => e !== phoneToPush);
                    phoneList.push(phoneToPush);
                } else {
                    continue
                }
                break;
        }
    }
    console.log(phoneList.join(', '));
}
phoneShop(["SamsungA50, MotorolaG5, IphoneSE","Add - Iphone10","Remove - IphoneSE","End",]); 
// SamsungA50, MotorolaG5, Iphone10

phoneShop(["HuaweiP20, XiaomiNote", "Remove - Samsung", "Bonus phone - XiaomiNote:Iphone5", "End"]) 
// HuaweiP20, XiaomiNote, Iphone5

phoneShop(["SamsungA50, MotorolaG5, HuaweiP10", "Last - SamsungA50", "Add - MotorolaG5", "End"]) 
// MotorolaG5, HuaweiP10, SamsungA50


