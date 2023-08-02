import WordEntry from './WordEntry.jsx'
const WordList = ({words}) => {


return (
  <div>
      {words.map((word, index)=><WordEntry word={word} index={index} key={index}/>)}
  </div>
)
}

export default WordList;