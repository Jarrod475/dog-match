import Tile from "./tile";
//import {useState,useEffect} from "react";

function Tilebox(props){




    let newArray = [];
    for (let x= 0; x< props.imgURL.length; x++){
        newArray.push(x);
        newArray.push(x);
       
    }
    newArray = ShuffleArray(newArray);
      
    

    //this fucntion recieves the clicked button's Pair ID
    function TileClicked(ID){
        console.log("TIle id is:",ID);
    }



    return(
        <div className="tilecontainer">
            {newArray.length > 0 && newArray.map((key,index)=>{
                return (
                    <Tile 
                        key={index} 
                        img={props.imgURL[key]} 
                        pairValue={key} 
                        tileSelector = {TileClicked}
                        />);})}
        </div>
    )
}

//this function is like await().
 // sleep(2000).then(() => { });
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