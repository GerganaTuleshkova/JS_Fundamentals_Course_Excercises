function language(country) {
    if (country == 'USA') {
        result = 'English';
    } else if (country == 'Spain') {
        result = 'Spanish';
    } else if (country == 'England') {
        result = 'English';
    } else if (country == 'Argentina') {
        result = 'Spanish';
    } else if (country == 'Mexico') {
        result = 'Spanish';
    } else {
        result = 'unknown'
    }
    console.log(result)
}

language('USA')
language('Germany')
