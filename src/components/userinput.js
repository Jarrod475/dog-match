function userInput(props){
    let num = 0;

    //this function is called from the onchange event on the input box. it sets the value of num to its current value.
    function setCount(event){
        num = event.target.value;
    }


    //when the 'FETCH' button is clicked. it sends 'num' to app.js.
    return(
        <div className="userinput">
            <p>How many dogs we talking??</p>
            <input onChange={setCount} className="input" type="number"></input> <br />
            <button onClick={()=>{props.buttonFunc("display",num)}} className="btn">FETCH!</button>
        </div>
    )

}


export default userInput;