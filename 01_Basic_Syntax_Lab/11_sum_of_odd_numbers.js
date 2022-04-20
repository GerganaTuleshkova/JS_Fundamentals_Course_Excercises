function solve(n) {
    sum = 1;
    current_num = 1;
    console.log(current_num)
    for (let i = 1; i < n; i += 1) {
        current_num += 2
        sum += current_num
        console.log(current_num)
    }
    console.log(`Sum: ${sum}`)
}

solve(5)
solve(3)
