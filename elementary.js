function multiply(a, b) {
    let result = 0;

    for (let i = 0; i < b; i++) {
        result += a;
    }

    return b < 0 ? -result : result;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero');
    }

    let quotient = 0;

    while (a >= b) {
        a -= b;
        quotient++;
    }

    return (a < 0) !== (b < 0) ? -quotient : quotient;
}

function modulo(a, b) {
    if (b === 0) {
        throw new Error('Division by zero');
    }

    while (a >= b) {
        a -= b;
    }

    return a < 0 ? -a : a;
}