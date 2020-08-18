import React from "react";
import Projects from './projects'
import AboutMe from "./aboutMeCard";
import Resume from './resumeCard'
const Body = (props) => {
  return (<div>
    <AboutMe />
    <Projects />
    <Resume />
    </div>);
}
export default Body;
