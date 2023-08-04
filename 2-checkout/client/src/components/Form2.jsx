import React from "react";


const {useState} = React;

const Form2 = ({page, setPage}) => {

  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const clickedNext = () => {

    // if user didn't input address line one or phone number, error
    if (address1 === '' || phoneNumber === '') {
      setError('Please fill in the first line of address and phone number fields before proceeding');
    } else {
      // if there is something in address 2 line, combine with address 1
      // store user inputs in sessionStorage
      if (address2 !== '') {
        sessionStorage.setItem("address", address1 + ' ' + address2);
      } else {
        sessionStorage.setItem("address", address1);
      }

      sessionStorage.setItem("phone_number", phoneNumber);

      setError('');
      setPage("form3");
    }
  }

  return (
    <div>
      <h1>Form 2</h1>
      {error !== '' ? error : null}
      <br></br>
      shipping address: <input name="address1" onChange={(e)=>{setAddress1(e.target.value)}}/>
      <br></br>
      <input name="address2" onChange={(e)=>{setAddress2(e.target.value)}}/>
      <br></br>
      phone number: <input name="phone_number" onChange={(e)=>{setPhoneNumber(e.target.value)}}/>
      <br></br>
      <button className="button-next" onClick={()=>{clickedNext()}}>next</button>
    </div>
  )
}

export default Form2;