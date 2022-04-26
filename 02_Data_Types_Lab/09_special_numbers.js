function specialNumbers(number) {
    for (n = 1; n <= number; n++) {
        let sum = 0;
        n = String(n);
        for (let i = 0; i < n.length; i++) {
            sum += Number(n[i]);
        }
        if (sum == 5 || sum == 7 || sum == 11) {
            console.log(`${n} -> True`);
        }
        else {
            console.log(`${n} -> False`);
        }
    }
}

specialNumbers(15)
specialNumbers(20)
