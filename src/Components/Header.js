import React from "react";
import NameDescription from "./NameDescription";
import Image from "./Image.js";
import NavigationBar from "./NavigationBar";

const Header = (props) => {
  return (
    <div className="row">
      <div className="col-3">
        <Image url={"images/preeti.jpg"}/>
      </div>
      <div className="col-9">
        <div style={{backgroundColor:"#E5F8FB"}} >
          <NameDescription />
        </div>
        <div className="col-12 bg-info">
          <NavigationBar handleInputValue={props.needHandlerToBePassedToNavigationBar}/>
        </div>
      </div>
    </div>
  );
};
export default Header;
