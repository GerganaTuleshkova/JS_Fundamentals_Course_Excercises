function wordOccurances(input) {
    let wordCounts = new Map();



    for (let word of input) {
        let count = 1;
        if (wordCounts.has(word)) {
            count = wordCounts.get(word) + 1;
        }

        wordCounts.set(word, count)
    }
    let sorted = Array.from(wordCounts)
        .sort((a, b) => b[1] - a[1]);

    for (let element of sorted) {
        console.log(`${element[0]} -> ${element[1]} times`);
    }
    
}

wordOccurances(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])