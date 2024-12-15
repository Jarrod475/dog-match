import Tile from "./tile";
import {useState,useEffect} from "react";
import Player from "./soundplayer";

function Tilebox(props){
    //states
    const [currentTile,setCurrentTile] = useState(null);
    const [unlockedTiles,setUnlockedTiles] = useState([]);
    const [isInteractible,setInteraction] = useState(true);
    //this seed state is to force the <tile /> component to update when the number is changed.
    //the number changes everytime the player turns over 2 different tiles.
    const [seed,setSeed] = useState();
    //this ensures that it only runs once and we dont get this error where we re-shuffle the array after every click
    const [shuffledArray] = useState(() => {
        let newArray = [];
        for (let x = 0; x < props.imgURL.length; x++) {
            newArray.push(x);
            newArray.push(x);
        }
        return ShuffleArray(newArray);
    });

    //this hook checks to see if the player has matched all the tiles.
    // eslint-disable-next-line
    useEffect(()=>{
        if (unlockedTiles.length >= props.count){
            props.victoryFunc();
        }
    },[unlockedTiles])

    //this is for the seed number. 
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    //this compares and returns true if the pairID is in the unlockedTiles array.
    function checkTile(id){
        if (unlockedTiles.includes(id)){
            return true;
        }else{
            return false;
        }
    }

    //this function recieves the clicked button's Pair ID
    function TileClicked(ID){
        console.log("Tile id is:",ID);
        if (ID === currentTile){
            setUnlockedTiles((oldarray)=>{return [...oldarray, ID]});
            setCurrentTile(null);
            Player();
        }
        else {
            if(currentTile === null){
                setCurrentTile(ID);
            }else{
            setInteraction(false);
            console.log('WRONG!');
            //waits 1.5 seconds before executing the next 2 lines.
            sleep(1500).then(() => { 
                setCurrentTile(null);
                setSeed(getRandomInt(1000));
                setInteraction(true);
            });
            
        }}
    }

    return(
        <div className="tilecontainer">
            {shuffledArray.length > 0 && shuffledArray.map((key,index)=>{
                return (
                    <Tile 
                        seed = {seed}
                        canClick = {isInteractible}
                        key={index} 
                        indexPos = {index}
                        img={props.imgURL[key]} 
                        pairValue={key} 
                        tileSelector = {TileClicked}
                        isSolved = {checkTile(key)}
                        />);})}
        </div>
    )
}

//this function is like the coroutine in c#().
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

//this shuffles the array using the 'fisher yates' method
function ShuffleArray(array){
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array ;
}



export default Tilebox;