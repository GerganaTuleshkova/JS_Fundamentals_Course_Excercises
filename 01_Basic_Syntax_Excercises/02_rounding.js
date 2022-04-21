function round(number, precision) {
    if (precision > 15) {
        precision = 15;
    }
    result = +number.toFixed(precision);
    // result = parseFloat(`${result}`);

    // result = parseFloat(`${number.toFormat(precision)}`);
    console.log(result);

}

round(3.145667, 3);
round(3.155667, 3);
