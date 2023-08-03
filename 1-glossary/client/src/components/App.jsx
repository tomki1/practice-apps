import React from "react";
import ReactDOM from 'react-dom';
import axios from 'axios';
import WordList from './WordList.jsx';
import Search from './Search.jsx';
const {useState, useEffect} = React;



const App = () => {

  const [words, setWords] = useState([]);

  // load glossary
  const loadGlossary = () => {

    // render glossary
    axios.get('/words')
      .then(
        (response) => {
          console.log(response.data)
          setWords(response.data);

      })
  }

  // delete word by id
  const deleteHandler = (id) => {
    axios.delete('/words',
      {data: {
        id: id
      }})
      .then((response) => {
        console.log(response.data);
        loadGlossary();
      });
  }

  // to render page upon first load
  useEffect(loadGlossary, []);

  const searchDatabase = (wordToSearch) => {
    axios.get('/searchwords',
      {params: {
        searchTerm: wordToSearch
      }})
      .then((response) => {
        console.log(response.data);
        setWords(response.data);
      });


  }

  return (
    <div>
      <h1>Glossary</h1>
      <div>
        <Search searchDatabase={searchDatabase}/>
        <WordList words={words} deleteHandler={deleteHandler}/>
      </div>

    </div>
  )

};

export default App;