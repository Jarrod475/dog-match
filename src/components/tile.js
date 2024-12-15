import secret from './SVG/secret.svg'
import {useState,useEffect} from 'react';

function Tile(props){
    
    //depending the state of our button tile dog thing, its either the 'hidden' SVG or its the img of its respective woofie.
    const [imgVisible,setState] = useState(false);
    
    let isSolved = props.isSolved;
    
    useEffect(()=>{
        if(isSolved){
            setState(true);
        }else{
            setState(false);
        }
    },[props.seed]);


    function clicked(){
        if(!imgVisible && !isSolved && props.canClick){
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