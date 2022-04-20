function language(country) {
    if (country == 'USA' || country == 'England') {
        result = 'English';
    } else if (country == 'Spain' || country == 'Argentina' || country == 'Mexico') {
        result = 'Spanish';
        } else {
        result = 'unknown'
    }
    console.log(result)
}

language('USA')
language('England')

language('Germany')
language(3)

