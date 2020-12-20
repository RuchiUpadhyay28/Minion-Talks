var btnTranslate=document.querySelector("#btnTranslate");
var input=document.querySelector("#txtinp");
var output=document.querySelector("#OutTxt");
var clickCounter=0;

var serverURL="https://api.funtranslations.com/translate/minion.json"

function getTransalation(text){
    return serverURL+"?"+"text="+text;
}
function errorHandler(error){
    console.log("Error Occured!",error);
    alert("The minions seem to be tired. Please try again after sometime")
}
function clickHandler(){
    clickCounter++;
    var userInp=input.value;
    fetch(getTransalation(userInp))
        .then(Response => Response.json())
        .then(json => 
            output.innerText=json.contents.translated
            )
        .catch(errorHandler)
};

btnTranslate.addEventListener("click",clickHandler);