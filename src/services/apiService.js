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

const deleteApi = async (url) => {
    const response = await fetch(url, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        } //Quizas la elimine la cabecera, debere revisar si funciona o no
    });

    return await response.json();
}

const putApi = async (url, bodyJson) => {
    const response = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyJson)
    });

    return await response.json();
}

export { getApi, postApi, deleteApi, putApi}