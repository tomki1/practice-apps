import React from "react";



const Form2 = ({page, setPage}) => {




  return (
    <div>
      <h1>Form 2</h1>
      shipping address: <input name="address" />
      <br></br>
      phone number: <input name="phone_number" />
      <br></br>
      <button className="button-next" onClick={()=>{setPage("form3")}}>next</button>
    </div>
  )

}

export default Form2;