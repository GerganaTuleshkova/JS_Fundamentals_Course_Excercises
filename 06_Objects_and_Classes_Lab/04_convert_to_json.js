function objToJson(name, lastName, hairColor) {
    let obj = {
        name,
        lastName,
        hairColor,
    };
    let jsonString = JSON.stringify(obj);
    console.log(jsonString);
}

objToJson('George', 'Jones', 'Brown');