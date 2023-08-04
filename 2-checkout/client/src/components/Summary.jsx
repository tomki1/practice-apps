import React from 'react';
import axios from 'axios';

const Summary = ({page, setPage}) => {

  const clickedSubmit = () => {
    axios.post('/checkout', {
      name: sessionStorage.name,
      email: sessionStorage.email,
      password: sessionStorage.password,
      address: sessionStorage.address,
      phone_number: sessionStorage.phone_number,
      card_number: sessionStorage.card_number,
      card_expiary_date: sessionStorage.card_expiary_date,
      card_cvv: sessionStorage.card_cvv,
      zipcode: sessionStorage.zipcode
    })
      .then(() => {console.log("checkout completed")})
      .catch(() => console.log("error with checkout"));

    setPage("home");
  }

  return (
    <div>
      <h1>Summary</h1>
      <p>name: {sessionStorage.name}</p>
      <p>email: {sessionStorage.email}</p>
      <p>password: {sessionStorage.password}</p>
      <p>phone number: {sessionStorage.phone_number}</p>
      <p>address: {sessionStorage.address}</p>
      <p>credit card number: {sessionStorage.card_number}</p>
      <p>card expiary date: {sessionStorage.card_expiary_date}</p>
      <p>CVV: {sessionStorage.card_cvv}</p>
      <p>zipcode: {sessionStorage.zipcode}</p>
      <p></p>
      <button className="button-order" onClick={()=>clickedSubmit()}>submit order</button>
    </div>
  )
}

export default Summary;