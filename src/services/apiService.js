const getApi = async (url) => {
    const response = await fetch(url);
    return await response.json();
}

const postApi = async (url, bodyJson) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyJson)
    });

    return await response.json();
}

export { getApi, postApi}