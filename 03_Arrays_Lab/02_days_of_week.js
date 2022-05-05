function dayOfWeek(number) {
    let weekDays = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];
    let result = 'Invalid day!';
    if (number >= 1 & number < weekDays.length + 1) {
        result = weekDays[number - 1];
    };
    console.log(result);
}

dayOfWeek(8)
dayOfWeek(4)
dayOfWeek(3)
dayOfWeek(-1)
dayOfWeek(7)


