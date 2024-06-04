const apiUrl = "https://translate.yamen.eu/translate";
const apiKey = 'a9153c42-41e6-416b-b597-7e86b6a8c25a';



document.getElementById("submit").addEventListener("click", function () {
    const inputText = document.getElementById("inputBox").value;

    const data = {
        q: inputText,
        source: "en",
        target: "de",
        format: "text",
        api_key: apiKey
    };

    const typeOfRequest = {
        method: "POST",
        headers: {
            'Accept': "application/json",
            'Content-Type': "application/json"
        },
        body: JSON.stringify(data)
    };

    fetch(apiUrl, typeOfRequest)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const translatedText = data.translatedText
            document.getElementById("outputBox").innerText = translatedText;
        });
});
