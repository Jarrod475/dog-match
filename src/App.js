import {useState} from 'react';
import axios from 'axios';
import './App.css';
import UserInput from './components/userinput';
import Tilebox from './components/tilebox';
import Victory from './components/victory';

function App() {
  const [pageState,setPageState] = useState("query");
  const [imgList,setImgList] = useState([]);
  const [dogCount, setCount] = useState(0);
  
  //this func is triggered by the "fetch button in userinput.js"
  async function changePage(state,data){
    //Sets the dog count to be used to track if the player has finished or not.
    setCount(data);
    //gets the dog URL's from the API
    await axios.get(`https://dog.ceo/api/breeds/image/random/${data}`)
    .then(function (response){
      setPageState(state);
      setImgList(response.data.message);

    })
  }

  function setVictory(){
    
    setPageState("victory");
  }
 
  function playAgain(){
    setPageState("query");
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>DOG MATCH</h1>
        {pageState === "query" ? (
          <UserInput buttonFunc={changePage} />
        ) : pageState === "display" ? (
          <Tilebox count={dogCount}  victoryFunc={setVictory} imgURL={imgList} />
        ) : (
          <Victory buttonFunc={playAgain}/>
        )}
      </header>
    </div>
  );
  
}



export default App; 
