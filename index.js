
const apiUrl = "https://api-free.deepl.com/v2/translate";

const apiKey = "30777254-61cd-4938-af3c-9c3b3a280a13:fx"

const data = {

    text: ["How are you "],
    target_lang: "DE"
}

const typeOfRequest = {
    method: "POST",
    headers: {
        "Authorization": `DeepL-Auth-Key ${apiKey}`,
        "Content-Type": "application/json"
    },

    body: JSON.stringify(data)
}

fetch(apiUrl, typeOfRequest)
    .then(response => response.json())
    .then(data => console.log(data))
