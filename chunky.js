function chunk(arr, chunky) {
    let result = [];

    for (let i = 0; i < arr.length; i += chunky) {
        let chunk = arr.slice(i, i + chunky);
        result.push(chunk);
    }

    return result;
}
