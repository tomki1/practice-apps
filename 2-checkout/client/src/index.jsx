import React from "react";
import { render } from "react-dom";
import Form1 from "./components/Form1.jsx"
import Form2 from "./components/Form2.jsx";
import Form3 from "./components/Form3.jsx";
import Summary from "./components/Summary.jsx";
const {useState} = React;


const App = () => {

  const [page, setPage] = useState("home");

  console.log(page);

    return (
      <div>
        <h1>Shop</h1>
        <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
        <br></br>
        {page === "home" ? (<button className="button-checkout" onClick={()=>{setPage("form1")}}>checkout</button>) : null}
        {page === "form1" ? (<Form1 page={page} setPage={setPage}/>) : null}
        {page === "form2" ? (<Form2 page={page} setPage={setPage}/>) : null}
        {page === "form3" ? (<Form3 page={page} setPage={setPage}/>) : null}
        {page === "summary" ? (<Summary page={page} setPage={setPage}/>) : null}
      </div>
    )


  // if (page === "form1") {
  //   return (
  //     <div>
  //     <Form1 page={page} setPage={setPage}/>
  //   </div>
  //   )
  // }

  // if (page === "form2") {
  //   return (
  //     <div>
  //     <Form2 page={page} setPage={setPage}/>
  //   </div>
  //   )
  // }

  // if (page === "form3") {
  //   return (
  //     <div>
  //     <Form3 page={page} setPage={setPage}/>
  //   </div>
  //   )
  // }

  // if (page === "summary") {
  //   return (
  //     <div>
  //     <Summary page={page} setPage={setPage}/>
  //   </div>
  //   )
  // }
}

render(<App/>, document.getElementById("root"));
