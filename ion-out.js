function ionOut(str) {
    // Split the string into words based on non-word characters
    const words = str.split(/\W+/);

    // Filter words that contain 'ion' and follow a 't'
    const result = words.filter(word => 
        word.includes('ion') && word.startsWith('t')
    ).map(word => 
        word.replace('ion', '')
    );

    return result;
}