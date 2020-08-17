import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {

//  const [linkSite, setLinkSite]= useState('')

// const setLink = ()=>{
// switch (linkSite){
// case 'aboutMe'
// return  
// case 'resume'
// return 
// case 'portfolio'
// return
// case 'contact'
// return
// }
// }


//   const handleInputValue = (event) =>
//   {    
//      setLinkSite(setLink());
//   }

  return (
    <div className="App">
      <div className="container">
      <div className="bg-light">
        <Header />
        </div>
        <div className=" bg-dark">
          <Body />
        </div>
      </div>
    </div>
  );
}

export default App;
