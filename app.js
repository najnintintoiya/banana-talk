var userInput = document.querySelector("#user-input");
var btnTranslate = document.querySelector("#btn-translate");
var userOutput = document.querySelector("#output-div");
var serverURL = "https://api.funtranslations.com/translate/minion.json";

function errorHandler(error){
    console.log("error occured ", error);
}

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}

function clickHandler() {
    var inputText = userInput.value;
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => userOutput.innerText = json.contents.translated)
    .catch(errorHandler)
}
btnTranslate.addEventListener("click",clickHandler);