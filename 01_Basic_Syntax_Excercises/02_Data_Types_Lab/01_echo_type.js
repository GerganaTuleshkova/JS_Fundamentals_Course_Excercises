function checkType(input) {
    inputType = typeof(input);
    console.log(inputType);
    if (inputType == 'string' || inputType == 'number') {
        console.log(input);
    }
    else {
        console.log('Parameter is not suitable for printing')
    }
}

checkType('Hello, JavaScript!')
checkType(null)
checkType(2)
