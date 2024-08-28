function multiply(a, b) {
    let result = 0;
    let positiveA = Math.abs(a);
    let positiveB = Math.abs(b);

    for (let i = 0; i < positiveB; i++) {
        result += positiveA;
    }

    return (a < 0) !== (b < 0) ? -result : result;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero');
    }

    let quotient = 0;
    let dividend = Math.abs(a);
    const divisor = Math.abs(b);

    while (dividend >= divisor) {
        dividend -= divisor;
        quotient++;
    }

    return (a < 0) !== (b < 0) ? -quotient : quotient;
}

function modulo(a, b) {
    if (b === 0) {
        throw new Error('Division by zero');
    }

    let dividend = Math.abs(a);
    const divisor = Math.abs(b);

    while (dividend >= divisor) {
        dividend -= divisor;
    }

    return a < 0 ? -dividend : dividend;
}