import {useState} from 'react';
import axios from 'axios';
import './App.css';
import UserInput from './components/userinput';
import Tilebox from './components/tilebox';

function App() {
  const [pageState,setPageState] = useState("query");
  const [imgList,setImgList] = useState([]);
  
  //this func is triggered by the "fetch button in userinput.js"
  async function changePage(state,data){
    //sets the state to change the page
    
    //gets the dog URL's from the API
    await axios.get(`https://dog.ceo/api/breeds/image/random/${data}`)
    .then(function (response){
      setPageState(state);
      setImgList(response.data.message);

    })

    console.log("The tile count is now:", data);
  }

 

  return (
    <div className="App">
      <header className="App-header">
      <h1>DOG MATCH</h1>
      {pageState ==="query"? <UserInput buttonFunc={changePage} /> : <Tilebox imgURL={imgList} />}
      </header>
    </div>
  );
}



export default App; 
