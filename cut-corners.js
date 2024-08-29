function round(num) {
    if (num >= 0) {
        return Math.floor(num + 0.5);
    } else {
        return Math.ceil(num - 0.5);
    }
}

function ceil(num) {
    if (num === Math.floor(num)) {
        return num;
    }
    return Math.floor(num) + 1;
}

function floor(num) {
    return Math.floor(num);
}

function trunc(num) {
    if (num >= 0) {
        return floor(num);
    } else {
        return ceil(num);
    }
}
