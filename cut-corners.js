function integerPart(num) {
    let sign = num >= 0 ? 1 : -1;
    num = Math.abs(num);
    let result = 0;
    let place = 1;
     while (place <= num) {
        place *=10
     }
     place /= 10;

     while (place >= 1) {
        while (result + place <= num) {
            result += place;
        }
        place /= 10
     }
     return result * sign;
}

function round(num) {
    let beforeDecPart = integerPart(num);
    let afterDecPart = num - beforeDecPart;
    if (Math.abs(afterDecPart) >= 0.5) {
        return beforeDecPart + (num>=0 ? 1 : -1);
    }
    return beforeDecPart;
}

function ceil(num) {
    intPart = integerPart(num);
    return num > intPart ? intPart + 1 : intPart;
}

function floor(num) {
    let intPart = integerPart(num);
    return num < intPart ? intPart - 1 : intPart;
}

function trunc(num) {
    return integerPart(num)
} 