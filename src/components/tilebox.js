import Tile from "./tile";


function Tilebox(props){
    return(
        <div className="tilecontainer">
            {props.imgURL.length > 0 && props.imgURL.map((URL ,index)=>{
                return <Tile key={index} img={URL} />})}
        </div>
    )
}

export default Tilebox;