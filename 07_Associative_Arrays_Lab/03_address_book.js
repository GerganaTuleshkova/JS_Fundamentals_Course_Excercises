function addressBook(detailsAsList) {
    let myAddressBook = {};
    for (let element of detailsAsList) {
        let [name, address] = element.split(':');
        myAddressBook[name] = address;
    }

    let sortedBook = Object.entries(myAddressBook);
    sortedBook.sort((a, b) => a[0].localeCompare(b[0]));
    
    for (let [person, address] of sortedBook) {
        console.log(`${person} -> ${address}`);
    }
}

addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
);