function meetings(detailsAsList) {
    let meetingCalendar = {};
    for (let element of detailsAsList) {
        let [day, name] = element.split(' ');
        if (meetingCalendar.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        }
        else {
            meetingCalendar[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (let day in meetingCalendar) {
        console.log(`${day} -> ${meetingCalendar[day]}`);
    }
}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
);
