
function Tile(props){
    return(
        <button className="tile">
            <img src={props.img} alt="A cute dog of some sort..." />
        </button>
    )
}

export default Tile;