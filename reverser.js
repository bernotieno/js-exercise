function reverse(input) {
    let reversed = [];
    const inLength = input.length;

    for (let i = inLength-1; i >= 0 ; i--) {
        reversed.push(input[i])
    }

    if (typeof input === 'string') {
        return reversed.join('');
    }
    return reversed
}