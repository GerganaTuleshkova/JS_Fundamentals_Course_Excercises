function sumFirstAndLast(arr) {
    let sum = Number(arr.pop()) + Number(arr.shift());
    console.log(sum);
}

sumFirstAndLast(['20', '30', '40'])