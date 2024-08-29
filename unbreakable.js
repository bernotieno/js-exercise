function split(str, delimiter) {
    let result = [];
    let current = '';
    const delimLength = delimiter.length;

    for (let i = 0; i < str.length; i++) {
        if (str.slice(i, i + delimLength) === delimiter) {
            result.push(current);
            current = '';
            i += delimLength - 1; 
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
