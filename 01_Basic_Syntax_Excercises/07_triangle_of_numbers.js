function triangle(number) {
    let result = '';
    let row = 1;
    while (row <= number) {
        let output = ''
        for (let i = 1; i <= row; i++) {
            output += row + ' '
        }
        console.log(output);
        row++;
    }
}

triangle(3);