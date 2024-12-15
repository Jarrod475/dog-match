import woof from "./Sounds/Woof.mp3"

function playSound() {
    
        const audio = new Audio(woof); 
        audio.play();
        console.log("woof");
}

export default playSound;