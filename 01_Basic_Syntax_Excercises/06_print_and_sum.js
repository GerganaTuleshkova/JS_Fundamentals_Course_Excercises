function print_and_sum(start, end) {
    let sum = 0;
    let current_num = start;
    let result = ''
    while (current_num <= end) {
        result += current_num + ' '
        sum += current_num;
        current_num++;
    }
    console.log(result);
    console.log(`Sum: ${sum}`);
}

print_and_sum(5, 10);