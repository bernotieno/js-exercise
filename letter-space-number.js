function letterSpaceNumber(str) {
    const result = [];

    const regex = /([a-zA-Z]) (\d)(?!\w)/g;
    let match;

    while ((match = regex.exec(str)) !== null) {
        result.push(`${match[1]} ${match[2]}`);
    }

    return result;
}

