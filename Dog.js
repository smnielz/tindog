// Create the Dog class here
class Dog{
    constructor(data){
        Object.assign(this, data)
    }
    //<img id="avatar-img" src=${avatar}></img>

    getDogHtml(){
        const {name, avatar, age, bio, hasBeenLiked, hasBeenSwiped} = this
        let message = ""
        if(hasBeenLiked){
            message = "LIKE"
        }
        if(hasBeenSwiped){
            message = "NOPE"
        }
        
        return `
        <div id="something">
            <h1>${name}, ${age}</h1>
            <p>${bio}</p> 
        </div>        
        <h2 class=${hasBeenLiked?"liked":hasBeenSwiped?"nope":""}>${message}</h2>
        `
    }
}

export default Dog