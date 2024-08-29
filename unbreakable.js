function split(str, sep) {
    if (sep === '') return Array.from(str);
    const result = [];
    let start = 0;
    let i;

    while((i = str.indexOf(sep, start)) !== -1) {
        result.push(str.substring(start, i));
        start = i + sep.length;
    }
    result.push(str.substring(start));
    if (result.length === 0 && str.startsWith(sep)) {
        result.push
    }
    return result;
}

function join(arr, delimeter) {
    if (!Array.isArray(arr)) {
        return arr
    }

    let answer = ''
    for (let i = 0; i < arr.length; i++) {
        answer += arr[i]
        if (i < arr.length-1) {
            answer += delimeter
        }
    }
    return answer
}
