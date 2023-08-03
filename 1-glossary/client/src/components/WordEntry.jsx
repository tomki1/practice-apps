const WordEntry = ({word, index, deleteHandler}) => {

  return (
    <div>
      <div className="word-entry">
        <p>{word.name}</p>
        <button className="delete-button" value={word._id} onClick={(event) => {deleteHandler(event.target.value)}}>delete word</button>
        <p>{word.definition}<button>update definition</button></p>
      </div>
    </div>
  )
}



export default WordEntry;