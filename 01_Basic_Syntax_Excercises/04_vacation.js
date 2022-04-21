function calcuulate_price(people_count, type, day) {
    let total_price = 0
    let stay_price = 0
    if (type == 'Students') {
        if (day == 'Friday') {
            stay_price = 8.45;
        } else if (day == 'Saturday') {
            stay_price = 9.80;
        } else if (day == 'Sunday') {
            stay_price = 10.46;
        }
        total_price = people_count * stay_price
        if (people_count >= 30) {
            total_price *= 0.85
        }
    }
    else if (type == 'Business') {
        if (day == 'Friday') {
            stay_price = 10.90;
        } else if (day == 'Saturday') {
            stay_price = 15.60;
        } else if (day == 'Sunday') {
            stay_price = 16;
        }
        total_price = people_count * stay_price
        if (people_count >= 100) {
            total_price -= 10 * stay_price
        }
    }
    else if (type == 'Regular') {
        if (day == 'Friday') {
            stay_price = 15;
        } else if (day == 'Saturday') {
            stay_price = 20;
        } else if (day == 'Sunday') {
            stay_price = 22.50;
        }
        total_price = people_count * stay_price
        if (people_count >= 10 && people_count <= 20) {
            total_price *= 0.95
        }
    }
    console.log(`Total price: ${total_price.toFixed(2)}`);
}

calcuulate_price(30, "Students", "Sunday")

calcuulate_price(40, "Regular", "Saturday")