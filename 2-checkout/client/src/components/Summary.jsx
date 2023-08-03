import React from 'react';

const Summary = ({page, setPage}) => {




  return (
    <div>
      <h1>Summary</h1>
      <button className="button-order" onClick={()=>{setPage("home")}}>submit order</button>
    </div>
  )
}

export default Summary;