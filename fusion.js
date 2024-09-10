function fusion(obj1, obj2) {
    const result = {};
    
    // Combine all keys from both objects
    const allKeys = [...new Set([...Object.keys(obj1), ...Object.keys(obj2)])];
    
    for (const key of allKeys) {
        const val1 = obj1[key];
        const val2 = obj2[key];
        
        // If key exists only in obj2, use obj2's value
        if (!(key in obj1)) {
            result[key] = val2;
            continue;
        }
        
        // If key exists only in obj1, use obj1's value
        if (!(key in obj2)) {
            result[key] = val1;
            continue;
        }
        
        // If types don't match, use obj2's value
        if (typeof val1 !== typeof val2) {
            result[key] = val2;
            continue;
        }
        
        // Merge based on type
        if (Array.isArray(val1)) {
            result[key] = [...val1, ...val2];
        } else if (typeof val1 === 'string') {
            result[key] = `${val1} ${val2}`.trim();
        } else if (typeof val1 === 'number') {
            result[key] = val1 + val2;
        } else if (typeof val1 === 'object') {
            result[key] = fusion(val1, val2);
        } else {
            result[key] = val2;
        }
    }
    
    return result;
}

// const obj1 = { a: 1, b: 'hello', c: [1, 2], d: { x: 10 } };
// const obj2 = { a: 2, b: 'world', c: [3, 4], d: { y: 20 } };

// const merged = fusion(obj1, obj2);
// console.log(merged);
