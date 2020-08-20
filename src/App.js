import React,{useState} from "react";
//import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const App =()=> {
  
const [currentSelection, setCurrentSelection] = useState('aboutMe')

const handlerForNavigationBar = (e) => { 
  e.preventDefault();
  setCurrentSelection(e.currentTarget.dataset.div_id);    
};

  return (
    <div className="App">
      <div className="container">
      <div className="bg-light" style={{background: "#A9ACE9" }}>
        <Header needHandlerToBePassedToNavigationBar={handlerForNavigationBar}/>
        </div>
        <div className="bg-dark">
          <Body selection= {currentSelection} />
        </div>
        <div >
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
