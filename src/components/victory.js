function victoryPage(props){
    return (
        <div>
            <h1>DOGTASTIC!</h1>
            <button onClick={()=>{props.buttonFunc()}} className="btn">Play again?</button>
        </div>
    )
}

export default victoryPage;