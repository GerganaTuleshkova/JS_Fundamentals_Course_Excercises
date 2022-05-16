function phoneBook(detailsAsList) {
    let myPhoneBook = {
    }
    for (let element of detailsAsList) {
        let [name, number] = element.split(' ');
        myPhoneBook[name] = number;
    }

    for (let person in myPhoneBook) {
        console.log(`${person} -> ${myPhoneBook[person]}`);
    }
}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
);