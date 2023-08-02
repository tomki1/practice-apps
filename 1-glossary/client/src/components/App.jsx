import React from "react";
import ReactDOM from 'react-dom';
import axios from 'axios';
import WordList from './WordList.jsx';
const {useState, useEffect} = React;



const App = () => {

  const [words, getWords] = useState([]);


  const loadGlossary = () => {

    axios.get('/words')
      .then(
        (response) => {
          getWords(response.data);
      })
  }

  useEffect(loadGlossary, []);

  return (
    <div>
      <div>
        <WordList words={words}/>
      </div>

    </div>
  )

};

export default App;