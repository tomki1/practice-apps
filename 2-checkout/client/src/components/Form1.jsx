import React from "react";



const Form1 = ({page, setPage}) => {



  return (
    <div>
      <h1>Form 1</h1>
      <button className="button-next" onClick={()=>{setPage("form2")}}>next</button>
    </div>
  )

}

export default Form1;