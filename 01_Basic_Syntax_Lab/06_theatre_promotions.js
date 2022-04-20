function calculate_ticket_price(day, age) {
    let ticket_price = -1;
    if (age >= 0 && age <= 18) {
        if (day == 'Weekday') {
            ticket_price = 12;
        } else if (day == 'Weekend') {
            ticket_price = 15;
        } else if (day == 'Holiday') {
            ticket_price = 5;
        }
    }
    else if (age > 18 && age <= 64) {
        if (day == 'Weekday') {
            ticket_price = 18;
        } else if (day == 'Weekend') {
            ticket_price = 20;
        } else if (day == 'Holiday') {
            ticket_price = 12;
        }
    }
    else if (age > 64 && age <= 122) {
        if (day == 'Weekday') {
            ticket_price = 12;
        } else if (day == 'Weekend') {
            ticket_price = 15;
        } else if (day == 'Holiday') {
            ticket_price = 10;
        }
    }

    if (ticket_price != -1) {
        console.log(`${ticket_price}$`)
    } else {
        console.log('Error!')
    }

}

calculate_ticket_price('Weekday', 42)
calculate_ticket_price('Holiday', -12)
