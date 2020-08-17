import React from "react";
import NameDescription from "./NameDescription";
import PicImage from "./PicImage.js";
import NavigationBar from "./NavigationBar";

const Header = () => {
  return (
    <div className="row">
      <div className="col-3">
        <PicImage />
      </div>
      <div className="col-9">
        <div className="bg-warning">
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
