function reverseInPlace(arr) {
    let reversedArray = '';
    for (let i = arr.length - 1; i >= 0; i--) {
       reversedArray += arr[i].toString() + ' ';
    };
    console.log(reversedArray);
}

reverseInPlace(['a', 'b', 'c', 'd', 'e'])
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop'])
reverseInPlace(['33', '123', '0', 'dd'])
