var btnTranslate=document.querySelector("#btnTranslate");
var input=document.querySelector("#txtinp");
var output=document.querySelector("#OutTxt");

var serverURL="https://api.funtranslations.com/translate/minion.json"

function getTransalation(text){
    return serverURL+"?"+"text="+text;
}
function errorHandler(error){
    console.log("Error Occured!",error);
}
function clickHandler(){
    var userInp=input.value;
    fetch(getTransalation(userInp))
        .then(Response => Response.json())
        .then(json => 
            output.innerText=json.contents.translated
            )
        .catch(errorHandler)
};

btnTranslate.addEventListener("click",clickHandler);