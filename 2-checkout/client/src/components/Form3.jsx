import React from 'react';
// import Summary from './components/Sumamry.jsx'

const Form3 = ({page, setPage}) => {




  return (
    <div>
      <h1>Form 3</h1>
      <button className="button-next" onClick={()=>{setPage("summary")}}>next</button>
    </div>
  )
}

export default Form3;