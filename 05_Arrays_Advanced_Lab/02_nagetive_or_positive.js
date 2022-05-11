function negativeOrPositive(inputArr) {
    let newArr = [];
    for (let el of inputArr) {
        el = Number(el)
        if (el >= 0) {
            newArr.push(el);
        } else {
            newArr.unshift(el);
        }
    }
   console.log(newArr.join('\r\n'));
}

negativeOrPositive(['7', '-2', '8', '9']);
negativeOrPositive(['3', '-2', '0', '-1']);
