import React from 'react';
const {useState} = React;

const WordEntry = ({word, index, deleteHandler, updateHandler}) => {

  // const changeHandler = (e) => {
  //   setText(e);
  //   setDefinition(e);
  // }

  const updateButton = (i) => {
    updateHandler(i);
  }

  const popUp = () => {
    let newDef = prompt("Enter new definition:", "");
    if (newDef === null || newDef === "") {
      return;
    }
    updateHandler(word._id, newDef);
  }

  return (
    <div>
      <div className="word-entry">
        <p>{word.name}</p>
        <button className="delete-button" value={word._id} onClick={(event) => {deleteHandler(event.target.value)}}>delete word</button>
        <p>{word.definition}</p>


        {/* <button value={word._id} onClick={(event) => {updateButton(event.target.value); setText("");}}>update definition</button>
        <input type="text" id="word-definition-edit" value={text} onChange={(event) => {changeHandler(event.target.value)}}/> */}


        <button className="show-button" onClick={() => {popUp();}}>update definition</button>
      </div>
    </div>
  )
}



export default WordEntry;