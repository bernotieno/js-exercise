function extractURLs(dataSet) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return dataSet.match(urlRegex) || [];
}

function countQueryParams(url) {
    const queryString = url.split('?')[1];
    return queryString ? queryString.split('&').length : 0;
}

function getURL(dataSet) {
    return extractURLs(dataSet);
}

function greedyQuery(dataSet) {
    const urls = extractURLs(dataSet);
    return urls.filter(url => countQueryParams(url) >= 3);
}

function notSoGreedy(dataSet) {
    const urls = extractURLs(dataSet);
    return urls.filter(url => {
        const paramCount = countQueryParams(url);
        return paramCount >= 2 && paramCount <= 3;
    });
}