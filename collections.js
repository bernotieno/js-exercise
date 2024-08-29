// Convert Array to Set
function arrToSet(arr) {
    return new Set(arr);
}

// Convert Array to String
function arrToStr(arr) {
    return arr.join('');
}

// Convert Set to Array
function setToArr(set) {
    return [...set];
}

// Convert Set to String
function setToStr(set) {
    return [...set].join('');
}

// Convert String to Array
function strToArr(str) {
    return [...str];
}

// Convert String to Set
function strToSet(str) {
    return new Set(str);
}

// Convert Map to Object
function mapToObj(map) {
    const obj = {};
    for (let [key, value] of map) {
        obj[key] = value;
    }
    return obj;
}

// Convert Object to Array (values only)
function objToArr(obj) {
    return Object.values(obj);
}

// Convert Object to Map
function objToMap(obj) {
    return new Map(Object.entries(obj));
}

// Convert Array to Object (index as keys)
function arrToObj(arr) {
    return arr.reduce((obj, val, index) => {
        obj[index] = val;
        return obj;
    }, {});
}

// Convert String to Object (index as keys)
function strToObj(str) {
    return str.split('').reduce((obj, val, index) => {
        obj[index] = val;
        return obj;
    }, {});
}

// Determine the specific type of a variable
function superTypeOf(value) {
    if (value === null) return 'null';
    if (value === undefined) return 'undefined';
    if (Array.isArray(value)) return 'Array';
    if (value instanceof Set) return 'Set';
    if (value instanceof Map) return 'Map';
    if (typeof value === 'string') return 'String';
    return typeof value === 'object' ? 'Object' : typeof value;
}