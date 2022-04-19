let a = 5;
let b = 10;

if (b > a) {
    console.log(b)
}

function solve(name, grade) {
    console.log('The name is: ' + name + ', grade: ' + grade);
    console.log(`The name is: ${name}, grade: ${grade.toFixed(2)}`);
}

solve('Peter', 3.555)