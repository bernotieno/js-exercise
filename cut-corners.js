function round(num) {
    const sign = num < 0 ? -1 : 1;
    num = num * sign; // Work with the absolute value

    // Determine the integer part by continuously subtracting 1
    let integerPart = 0;
    while (num >= 1) {
        num -= 1;
        integerPart += 1;
    }
    if (sign === 1 && num > 0) {
        integerPart += 1;
    }

    // Check if the remaining fractional part is 0.5 or more
    if (num >= 0.5) {
        integerPart += 1;
    }

    return integerPart * sign;
}

function ceil(num) {
    const sign = num < 0 ? -1 : 1;
    num = num * sign; // Work with the absolute value

    let integerPart = 0;
    while (num > 1) {
        num -= 1;
        integerPart += 1;
    }

    if (sign === 1 && num > 0) {
        integerPart += 1;
    }

    if (num > 0) {
        integerPart += 1;
    }

    return integerPart * sign;
}

function floor(num) {
    const sign = num < 0 ? -1 : 1;
    num = num * sign; // Work with the absolute value

    let integerPart = 0;
    while (num >= 1) {
        num -= 1;
        integerPart += 1;
    }

  
    if (sign === -1 && num > 0) {
        integerPart += 1;
    }

    return integerPart * sign;
}


function trunc(num) {
    const sign = num < 0 ? -1 : 1;
    num = num * sign; // Work with the absolute value

    let integerPart = 0;
    while (num >= 1) {
        num -= 1;
        integerPart += 1;
    }

    if (sign === 1 && num > 0) {
        integerPart += 1;
    }

    return integerPart * sign;
}
