import React from 'react';


const {useState} = React;

const Form3 = ({page, setPage}) => {

  const [cc, setCC] = useState('');
  const [ccExpDate, setCCExpDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [error, setError] = useState('');

  const clickedNext = () => {

    // if user didn't input all fields, error
    if (cc === '' || ccExpDate === '' || cvv === '' || zipcode === '') {
      setError('Please fill in all fields before proceeding');
    } else {
      // store user inputs in sessionStorage
      sessionStorage.setItem("card_number", cc);
      sessionStorage.setItem("card_expiary_date", ccExpDate);
      sessionStorage.setItem("card_cvv", cvv);
      sessionStorage.setItem("zipcode", zipcode);

      setError('');
      setPage("summary")
    }
  }

  return (
    <div>
      <h1>Form 3</h1>
      {error !== '' ? error : null}
      <br></br>
      credit card number: <input name="card_number" onChange={(e)=>setCC(e.target.value)}/>
      <br></br>
      card expiary date: <input name="card_expiary_date" type="date" onChange={(e)=>setCCExpDate(e.target.value)}/>
      <br></br>
      CVV: <input name="card_cvv" onChange={(e)=>setCvv(e.target.value)}/>
      <br></br>
      billing zipcode: <input name="zipcode" onChange={(e)=>setZipcode(e.target.value)}/>
      <br></br>
      <button className="button-next" onClick={()=>{clickedNext()}}>next</button>
    </div>
  )
}

export default Form3;