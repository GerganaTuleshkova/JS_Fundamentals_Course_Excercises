function leap_year(year) {
    let result = 'no'
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        result = 'yes';
    }
    console.log(result);
}

leap_year(1984);
leap_year(2003);
leap_year(4);