function kSequence(n, k) {
    let result = [1];
    for (let i = 1; i < n; i++) {
        let previousK = result.slice(-k);
        let sumPreviousK = 0;
        for (let element of previousK) {
            sumPreviousK += element;
        }
        result.push(sumPreviousK)
    }
    console.log(result.join(' '))
}

kSequence(6, 3);
kSequence(8, 2);

