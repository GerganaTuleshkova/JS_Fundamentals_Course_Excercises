// An amazing number includes the digit 9 in the sum of its digits

function amazingNumber(number) {
    let sum = 0;
    number = String(number);
    for (let i = 0; i <number.length; i++) {
        sum += Number(number[i]);
    }
    sumAsString = String(sum)
    let result = sumAsString.includes('9');

    console.log(result?
        `${number} Amazing? True` :
        `${number} Amazing? False`);
}

amazingNumber(1233)
amazingNumber(999)
