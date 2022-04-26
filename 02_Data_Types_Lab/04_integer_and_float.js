function sum(num1, num2, num3) {
    let sumOfNums = num1 + num2 + num3;
    let type = sumOfNums % 1 === 0 ? 'Integer': 'Float';
    
    console.log(`${sumOfNums} - ${type}`);
}

sum(9, 100, 1.1);
sum(100, 200, 303);
