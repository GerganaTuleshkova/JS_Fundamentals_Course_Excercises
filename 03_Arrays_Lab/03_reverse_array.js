function reverseArrayToNumber(number, arr) {
    let reversedArray = [];
    for (let i = number - 1; i >= 0; i--) {
       reversedArray.push(arr[i]);
    };
    console.log(reversedArray.join(" "));
}

reverseArrayToNumber(3, [10, 20, 30, 40, 50]);
reverseArrayToNumber(4, [-1, 20, 99, 5]);
reverseArrayToNumber(2, [66, 43, 75, 89, 47]);
