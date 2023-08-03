import React from "react";
import ReactDOM from 'react-dom';
import axios from 'axios';
import WordList from './WordList.jsx';
const {useState, useEffect} = React;



const App = () => {

  const [words, getWords] = useState([]);

  // load glossary
  const loadGlossary = () => {

    // render glossary
    axios.get('/words')
      .then(
        (response) => {
          getWords(response.data);

      })
  }

  // delete word by id
  const deleteHandler = (id) => {
    axios.delete('/words',
      {data: {
        id: id
      }})
      .then((response) => {
        loadGlossary();
      });
  }

  // to render page upon first load
  useEffect(loadGlossary, []);

  return (
    <div>
      <h1>Glossary</h1>
      <div>
        <WordList words={words} deleteHandler={deleteHandler}/>
      </div>

    </div>
  )

};

export default App;