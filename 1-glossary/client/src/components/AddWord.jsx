import React from 'react';
const {useState} = React;

const AddWord = ({addHandler}) => {

  const [newWord, setNewWord] = useState('');
  const [newDef, setNewDef] = useState('');

  const changeHandlerWord = (e) => {
    console.log(e);
    setNewWord(e);
  }
  const changeHandlerDef = (e) => {
    console.log(e);
    setNewDef(e);
  }
return (

  <div>
    <input type="text" id="add-word" onChange={(event) => {changeHandlerWord(event.target.value)}}/>
    <input type="text" id="add-def" onChange={(event) => {changeHandlerDef(event.target.value)}}/>
    <button className="add-button" onClick={()=>{addHandler(newWord, newDef)}}>add word</button>
  </div>
)

}




export default AddWord;