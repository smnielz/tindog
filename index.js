// Remember to import the data and Dog class!
import dogs from "./data.js"
import Dog from "./Dog.js"

document.getElementById("heart-button").addEventListener("click", like)
document.getElementById("reject-button").addEventListener("click", dislike)

function like(){
    dogo.hasBeenLiked = true
    document.getElementById("page").innerHTML = dogo.getDogHtml()
    console.log(document.getElementById("page").innerHTML)
    nextDog()
    document.getElementById("heart-button").disabled = true
    setInterval(()=>{        
        reload()
        document.getElementById("heart-button").disabled = false
    }, 1500)
}

function dislike(){
    dogo.hasBeenSwiped = true
    document.getElementById("page").innerHTML = dogo.getDogHtml()
    console.log(document.getElementById("page").innerHTML)
    nextDog()
    document.getElementById("reject-button").disabled = true
    setInterval(()=>{        
        reload()
        document.getElementById("reject-button").disabled = false
    }, 1500)
}
let dogo = new Dog(dogs.shift())

function nextDog(){
    if(dogs.length > 0)
        dogo = new Dog(dogs.shift())
}

function reload(){
    document.getElementById("page").innerHTML = dogo.getDogHtml()
}

reload()