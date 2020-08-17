import React from "react";

const Navbar = () => {
  return (
    <div className="text-center p-2 bg-info" id="navigationbar">
      <div className="row ">
        <a className="navigation col text-white" href="#" value="aboutMe">
          About Me 
        </a>
        <a className="navigation col text-white" href="#" value="resume">
          Resume
        </a>
        <a className="navigation col text-white" href="#" value="portfolio">
          Projects
        </a>
        <a className="navigation col text-white" href="#" value="contact">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
