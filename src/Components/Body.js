import React from "react";
import Projects from "./projects";
import AboutMe from "./aboutMeCard";
import Resume from "./resumeCard";
import Contact from "./contactCard";

const Body = (props) => {
  if (props.selection === "aboutMe") {
    return (
      <div>
        <AboutMe /> 
      </div>
     
    )
  }  else if (props.selection === "projects") {
    return (
      <div>
        <Projects />
      </div>
    );
  } else if (props.selection === "resume") {
    return (
      <div>
        <Resume />
      </div>
    )
  }
  else if (props.selection === "contact") {
    return (
      <div>
        <Contact />
      </div>
    );
  }  
}
   


export default Body;
