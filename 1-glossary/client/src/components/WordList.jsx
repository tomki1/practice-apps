import WordEntry from './WordEntry.jsx'
const WordList = ({words, deleteHandler}) => {


return (
  <div>
      {words.map((word, index)=><WordEntry word={word} index={index} key={index} deleteHandler={deleteHandler}/>)}
  </div>
)
}

export default WordList;