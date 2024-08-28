function slice(input, start, end) {
    let result = [];

    if (start < 0) start = input.length + start;
    if (end === undefined || end > input.length) end = input.length;
    if (end < 0) end = input.length + end;

    const isString = typeof input === 'string';
    const array = isString ? input.split('') : input;

    for (let i = start; i < end; i++) {
        result.push(array[i]);
    }

    return isString ? result.join('') : result;
}
