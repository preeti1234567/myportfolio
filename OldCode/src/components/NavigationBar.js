import React from 'react';

const NavigationBar = (props) =>{
    
    return(
        <div className="row">
            <a className="navigation col text-white" href="{}" value="aboutMe" onClick={props.handleInputValue} >
              About Me
            </a>
                <a className="navigation col text-white" href="{}" value="resume" onClick={props.handleInputValue}>
                Resume
            </a>
            <a className="navigation col text-white" href="{}" value="portfolio" onClick={props.handleInputValue}>
              Projects
            </a>
            <a className="navigation col text-white" href="{}" value="contact" onClick={props.handleInputValue}>
              Contact
            </a>
        </div>

    );
}
export default NavigationBar;


