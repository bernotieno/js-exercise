function letterSpaceNumber(str) {
    const result = [];

    const regex = /([a-zA-Z]) (\d)(?=\D|$)/g;
    let match;

    while ((match = regex.exec(str)) !== null) {
        result.push(`${match[1]} ${match[2]}`);
    }

    return result;
}

console.log(letterSpaceNumber('example 1, example 20')); // Output: ['e 1']
