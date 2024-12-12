import Tile from "./tile";


function Tilebox(props){

    return(
        <div className="tilecontainer">
            {props.imgURL.length > 0 && props.imgURL.map((URL,index)=>{
                return <Tile key={index} img={URL} />})}
        </div>
    )
}

function ShuffleArray(array){
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array ;
}

export default Tilebox;