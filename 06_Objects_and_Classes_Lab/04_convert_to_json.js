function objToJson(name, lastName, haiColor) {
    let obj = {
        name,
        lastName,
        haiColor,
    };
    let jsonString = JSON.stringify(obj);
    console.log(jsonString)
}

objToJson('George', 'Jones', 'Brown')