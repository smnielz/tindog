// Create the Dog class here
class Dog{
    constructor(data){
        Object.assign(this, data)
    }
    

    getDogHtml(){
        const {name, avatar, age, bio, hasBeenLiked, hasBeenSwiped} = this
        let message = ""
        if(hasBeenLiked){
            message = "LIKE"
        }
        if(hasBeenSwiped){
            message = "NOPE"
        }
        return `<img id="avatar-img" src=${avatar}>
        <h1>${name}, ${age}</h1>
        <p>${bio}</p>
        <h2 class=${hasBeenLiked?"liked":hasBeenSwiped?"nope":""}>${message}</h2>
        `
    }
}

export default Dog