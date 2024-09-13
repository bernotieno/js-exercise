async function getJSON(path, params = {}) {
    let url;
    try{
        url = new URL(path)
    } catch (error) {
        url = new URL(path, 'http://dummy.com')
    }

    Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
    );

    const urlToFetch =
    url.protocol === 'http:' && url.host === 'dummy.com'
    ? url.pathname + url.search
    : url.toString();

    try {
        const response = await fetch(urlToFetch);

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const jsonResponse = await response.json();

        if (jsonResponse.error) {
            throw new Error(jsonResponse.error);
        }
        
        if (jsonResponse.data !== undefined) {
            return jsonResponse.data
        }

        return jsonResponse;
    } catch (error) {
        throw error;
    }
}

// console.log(getJSON('/test', { query: 'hello world', b: 5 }))
