import React from "react";
import NameDescription from "./NameDescription";
import Image from "./Image.js";
import NavigationBar from "./NavigationBar";

const Header = () => {
  return (
    <div className="row">
      <div className="col-3">
        <Image url={"images/preeti.jpg"}/>
      </div>
      <div className="col-9">
        <div style={{backgroundColor:"antiquewhite"}} >
          <NameDescription />
        </div>
        <div className="col-12 bg-info">
          <NavigationBar />
        </div>
      </div>
    </div>
  );
};
export default Header;
