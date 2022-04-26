function solve(givenString, char, comparingString) {
    let resultString = '';
    for (let i = 0; i <givenString.length; i++) {
        if (givenString[i] == '_') {
            resultString += char;
        }
        else {
            resultString += givenString[i];
        }
    }
    if (resultString == comparingString) {
        console.log('Matched');
    }
    else {
        console.log('Not Matched');
    }
}

solve('Str_ng', 'I', 'Strong');
solve('Str_ng', 'i', 'String');