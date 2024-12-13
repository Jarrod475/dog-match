import secret from './SVG/secret.svg'
import {useState} from 'react';

function Tile(props){

    //depending the state of our button tile dog thing, its either the 'hidden' SVG or its the img of its respective woofie.
    const [imgVisible,setState] = useState(false);
    let isSolved = false;

    function clicked(){
        if(!imgVisible){
            setState(!imgVisible);
            props.tileSelector(props.pairValue);
        }   
    }


    return(
        <button onClick={clicked} className="tile">
           {imgVisible === true?<img src={props.img} alt="A pup undercover!" />:<img src={secret} alt="A cute dog of some sort..." /> } 
        </button>
    )
}

export default Tile;