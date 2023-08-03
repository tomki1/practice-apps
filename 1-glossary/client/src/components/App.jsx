import React from "react";
import ReactDOM from 'react-dom';
import axios from 'axios';
import WordList from './WordList.jsx';
import Search from './Search.jsx';
import AddWord from './AddWord.jsx';


const {useState, useEffect} = React;



const App = () => {

  const [words, setWords] = useState([]);
  const [newWord, setNewWord] = useState('');
  const [newDef, setNewDef] = useState('');

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

  // update definition
  const updateHandler = (id, newDef) => {
    axios.put('/words', {
        id: id,
        definition: newDef
    })
      .then((response) => {
        loadGlossary();
      })
  }

  // add word
  const addHandler = (newWord, newDef) => {
    axios.post('/words', {
        name: newWord,
        definition: newDef
    })
      .then((response) => {
        console.log(response)
        setNewWord('');
        setNewDef('')
        loadGlossary();
      })
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
        <AddWord addHandler={addHandler} newWord={newWord} setNewWord={setNewWord} newDef={newDef} setNewDef={setNewDef}/>
        <WordList words={words} deleteHandler={deleteHandler} updateHandler={updateHandler}/>
      </div>

    </div>
  )

};

export default App;