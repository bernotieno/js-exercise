function split(str, delimiter) {
    let result = [];
    let current = '';

    for (let i = 0; i < str.length; i++) {
        if (str.substring(i, i + delimiter.length) === delimiter) {
            result.push(current);
            current = '';
            i += delimiter.length - 1; 
        } else {
            current += str[i];
        }
    }

    result.push(current); 
    return result;
}

function join(arr, separator) {
    let result = '';

    for (let i = 0; i < arr.length; i++) {
        if (i > 0) {
            result += separator;
        }
        result += arr[i];
    }

    return result;
}
