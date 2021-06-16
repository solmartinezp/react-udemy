export default async function abstractService({
    url,
    method,
    body,
    headers,
}) {
    try {
        const response= await fetch(url, {
            method,
            body,
            headers
        });

        return response.json();
    } catch (error) {
        Promise.reject(error);    
    }
}