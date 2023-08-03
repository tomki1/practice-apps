import WordEntry from './WordEntry.jsx'
const WordList = ({words, deleteHandler, updateHandler}) => {


return (
  <div>
      {words.map((word, index)=><WordEntry word={word} index={index} key={index} deleteHandler={deleteHandler} updateHandler={updateHandler}/>)}
  </div>
)
}

export default WordList;