async function getJSON(path, params = {}) {
    try {
        const baseUrl = 'http://example.com'; 
        const url = new URL(path, baseUrl);
        url.search = new URLSearchParams(params).toString();

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const jsonResponse = await response.json();

        if (jsonResponse.error) {
            throw new Error(jsonResponse.error);
        }

        return jsonResponse.data;
    } catch (error) {
        throw error;
    }
}

console.log(getJSON('/test', { query: 'hello world', b: 5 }))
