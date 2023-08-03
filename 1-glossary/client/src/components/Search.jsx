import React from 'react';
import ReactDOM from 'react-dom';

const {useState} = React;

const Search = ({searchDatabase}) => {

  const [search, setSearch] = useState('');

  const searchHandler = (q) => {
    searchDatabase(q);
  }

  const changeHandler = (e) => {
    setSearch(e);
  }

  return (
    <div>
      <div>
        <input type="text" id="word-search" onChange={(event)=>{changeHandler(event.target.value)}}/>
        <button onClick={()=>{searchHandler(search)}}>Search</button>
      </div>

    </div>
  )


}
export default Search;