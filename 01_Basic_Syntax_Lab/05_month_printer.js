function month_printer(month_num) {
    if (month_num == 1) {
        result = 'January';
    } else if (month_num == 2) {
        result = 'February';
    } else if (month_num == 3) {
        result = 'March';
    } else if (month_num == 4) {
        result = 'April';
    } else if (month_num == 5) {
        result = 'May';
    } else if (month_num == 6) {
        result = 'June';
    } else if (month_num == 7) {
        result = 'July';
    } else if (month_num == 8) {
        result = 'August';
    } else if (month_num == 9) {
        result = 'September';
    } else if (month_num == 10) {
        result = 'October';
    } else if (month_num == 11) {
        result = 'November';
    } else if (month_num == 12) {
        result = 'December';
    } else {
        result = 'Error!'
    }
    console.log(result)
}

month_printer(2)
month_printer(13)