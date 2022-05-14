function toObject(string) {
    let obj = JSON.parse(string);
    for (key of Object.keys(obj)) {
        console.log(`${key}: ${obj[key]}`);
    }
}

toObject('{"name": "George", "age": 40, "town": "Sofia"}')