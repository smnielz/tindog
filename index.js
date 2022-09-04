// Remember to import the data and Dog class!
import dogs from "./data.js"
import Dog from "./Dog.js"

document.getElementById("heart-button").addEventListener("click", like)
document.getElementById("reject-button").addEventListener("click", dislike)

function like(){
    dogo.hasBeenLiked = true
    dogo.hasBeenSwiped = false
    setPageHtml()
}

function dislike(){
    dogo.hasBeenSwiped = true
    dogo.hasBeenLiked = false
    setPageHtml()    
}

function swiped(){
    setPageHtml()    
}

function setPageHtml()
{
    dogs.push(dogo)
    reload()
    nextDog()
    document.getElementById("reject-button").disabled = true
    document.getElementById("heart-button").disabled = true
    setTimeout(() => {
        reload()
        document.getElementById("reject-button").disabled = false
        document.getElementById("heart-button").disabled = false
    }, 1000);
}

let dogo = new Dog(dogs.shift())

function nextDog(){        
    dogo = new Dog(dogs.shift())    
}

function reload(){
    document.getElementById("page").innerHTML = dogo.getDogHtml()
    let element = document.getElementById("avatar-img")
    if(element.addEventListener){
        element.addEventListener("click", swiped, false);
    }else{
        element.attachEvent("on"+"click", swiped);
 }
}

reload()

