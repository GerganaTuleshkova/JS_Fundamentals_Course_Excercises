function personInfo(firstName, lastName, age) {
    let personDetails = {
        firstName: firstName, 
        lastName: lastName, 
        age: Number(age)};
    return personDetails;
}

console.log(personInfo("Peter", 
"Pan",
"20"
))