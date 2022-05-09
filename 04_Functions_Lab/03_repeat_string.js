function repeatString(str, repeats) {
    let result = '';
    for (i = 0; i < repeats; i++) {
        result += str;
    }
    return result;
}

console.log(repeatString("abc", 3));
console.log(repeatString("String", 2));
