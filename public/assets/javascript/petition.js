export const doPetitionToServer = async ({url, method, data}) => {
    let resp = await fetch(url, {
        method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
    .then(data => data.json())
    .then(data => data)
    .catch(err => err);
    return resp;
};