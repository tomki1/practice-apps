import React from "react";


const {useState} = React;

const Form1 = ({page, setPage}) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const clickedNext = () => {

    // if user didn't input all fields, error
    if (name === '' || email === '' || password === '') {
      setError('Please fill in all fields before proceeding');
    } else {
      // store user inputs in sessionStorage
      sessionStorage.setItem("name", name);
      sessionStorage.setItem("email", email);
      sessionStorage.setItem("password", password);

      setError('');
      setPage("form2");
    }
  }

  return (
    <div>
      <h1>Form 1</h1>
      {error !== '' ? error : null}
      <br></br>
      name: <input name="name" onChange={(e)=>(setName(e.target.value))}/>
      <br></br>
      email: <input name="email" onChange={(e)=>{setEmail(e.target.value)}}/>
      <br></br>
      password: <input name="password" onChange={(e)=>{setPassword(e.target.value)}}/>
      <br></br>
      <button className="button-next" onClick={()=>{clickedNext();}}>next</button>
    </div>
  )
}

export default Form1;