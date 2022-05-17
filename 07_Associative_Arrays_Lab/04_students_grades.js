function showGrades(input) {
    let studentsGrades = new Map();

    for (let element of input) {
        let dataAsList = element.split(' ');
        let name = dataAsList.shift();
        let grades = dataAsList.map(Number);

        if (studentsGrades.has(name)) {
            let currentGrades = studentsGrades.get(name);
            grades = grades.concat(currentGrades);
        }

        studentsGrades.set(name, grades);
    }

    let sortedGrades = Array.from(studentsGrades.entries()).sort((a, b) => a[0].localeCompare(b[0]));

    for (let studentDetails of sortedGrades) {
        let sum = 0;
        let grades = studentDetails[1];
        for (let grade of grades) {
            sum += Number(grade);
        }
        let averageGrade = sum / grades.length;
        console.log(`${studentDetails[0]}: ${averageGrade.toFixed(2)}`);
    }
}

showGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
);

showGrades(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3']
);