import React from "react";

const {useState} = React;

const Form1 = ({page, setPage}) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const nameChange = (e) => {
    setName(e);
  }

  const emailChange = (e) => {
    setEmail(e);
  }

  const passwordChange = (e) => {
    setPassword(e);
  }

  const clickedNext = () => {
    if (name === '' || email === '' || password === '') {
      setError('Please fill in all fields before proceeding');
    } else {
      sessionStorage.setItem("name", name);
      sessionStorage.setItem("email", email);
      sessionStorage.setItem("password", password);
      setPage("form2");
    }
  }

  return (
    <div>
      <h1>Form 1</h1>
      {error !== '' ? error : null}
      <br></br>
      name: <input name="name" onChange={(e)=>(nameChange(e.target.value))}/>
      <br></br>
      email: <input name="email" onChange={(e)=>{emailChange(e.target.value)}}/>
      <br></br>
      password: <input name="password" onChange={(e)=>{passwordChange(e.target.value)}}/>
      <br></br>
      <button className="button-next" onClick={()=>{clickedNext();}}>next</button>
    </div>
  )

}

export default Form1;