function get(src, path) {
    const keys = path.split('.'); 
    let result = src;

    for (let i = 0; i < keys.length; i++) {
        result = result[keys[i]]; 
        if (result === undefined) {
            return undefined; 
        }
    }

    return result; 
}
