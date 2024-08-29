// Function to remove the first 2 characters
function cutFirst(str) {
    return str.slice(2);
}

// Function to remove the last 2 characters
function cutLast(str) {
    return str.slice(0, -2);
}

// Function to remove the first 2 and last 2 characters
function cutFirstLast(str) {
    return str.slice(2, -2);
}

// Function to keep only the first 2 characters
function keepFirst(str) {
    return str.slice(0, 2);
}

// Function to keep only the last 2 characters
function keepLast(str) {
    return str.slice(-2);
}

// Function to keep the first 2 and last 2 characters
function keepFirstLast(str) {
    if (str.length <= 4) {
        return str;
    }
    return str.slice(0, 2) + str.slice(-2);
}

