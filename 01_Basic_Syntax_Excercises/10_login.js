function login(input) {
    let userName = input[0];
    let counter = 1;
    for (let i = 1; i < input.length; i++) {

        let reversedString = input[i];
        reversedString = reversedString.split('');
        reversedString = reversedString.reverse();
        reversedString = reversedString.join('');

        if (reversedString !== userName) {
            if (counter == 4) {
                console.log(`User ${userName} blocked`);
                break;
            }
            else {
                console.log('Incorrect password. Try again.');
            }
        }
        else {
            console.log(`User ${userName} logged in.`);
        }
        counter++
    }
}

// login(['Acer','login','go','let me in','recA']);
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);