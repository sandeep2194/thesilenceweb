export async function fetchNews(skip, limit) {
    const url = `http://13.233.129.14/parse/classes/NewsPost?skip=${skip}&limit=${limit}&order=-createdAt`
    const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'X-Parse-Application-Id': 'myappID',
        },
    });
    return response.json();
}
export async function updateReaction(fieldName, value, id) {
    const url = 'http://13.233.129.14/parse/classes/NewsPost/' + id;
    const body = {};
    body[fieldName] = value;
    const response = await fetch(url, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'X-Parse-Application-Id': 'myappID',
        },
        body: JSON.stringify(body)
    });
    return response.json();
}