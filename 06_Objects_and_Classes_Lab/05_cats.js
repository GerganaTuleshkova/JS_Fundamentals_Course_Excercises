class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    meow() {
        console.log(`${this.name}, age ${this.age} says Meow`);
    }
}

function cats(input) {
    for (let element of input) {
        let name, age = element.split(' ');
        // let details = element.split(' ');
        // let name = details[0];
        // let age = details[1];

        let cat = new Cat(name, age);
        cat.meow()
    }
}

cats(['Mellow 2', 'Tom 5'])