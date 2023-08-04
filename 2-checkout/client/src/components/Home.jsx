import React from 'react';


const Home = ({page, setPage}) => {

  return (
    <div>
      <h1>Home</h1>
      <button className="button-checkout" onClick={()=>{setPage("form1")}}>checkout</button>
    </div>
  )
}

export default Home;