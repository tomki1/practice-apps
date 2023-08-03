import React from "react";
import Form3 from "./Form3.jsx";


const Form2 = ({page, setPage}) => {




  return (
    <div>
      <h1>Form 2</h1>
      <button className="button-next" onClick={()=>{setPage("form3")}}>next</button>
    </div>
  )

}

export default Form2;