function round(number, precision) {
    if (precision > 15) {
        precision = 15;
    }
    let result = +number.toFixed(precision);
    console.log(result);
}

round(3.145667, 3);
round(3.155667, 3);
