import React from 'react';


const Form3 = ({page, setPage}) => {

  return (
    <div>
      <h1>Form 3</h1>
      credit card number: <input name="card_number" />
      <br></br>
      card expiary date: <input name="card_expiary_date" />
      <br></br>
      CVV: <input name="card_cvv" />
      <br></br>
      billing zipcode: <input name="zipcode" />
      <br></br>
      <button className="button-next" onClick={()=>{setPage("summary")}}>next</button>
    </div>
  )
}

export default Form3;