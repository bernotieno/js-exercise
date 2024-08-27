function words(str) {
    return input.split(' ')
}

function sentence(arr) {
    return input.join(' ')
}

function yell(str) {
    return input.toUpperCase()
}

function whisper(str) {
    return `*${str.toLowerCase()}*`;
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}