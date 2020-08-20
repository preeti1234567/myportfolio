import React from 'react';

const NavigationBar = (props) =>{
    
    return(
        <div className="row p-3">
           
            <a className="navigation col text-white" href='aboutMe'  onClick={props.handleInputValue} >
              About Me
            </a>
                <a className="navigation col text-white" href='resume' onClick={props.handleInputValue}>
                Resume
            </a>
            <a className="navigation col text-white" href='projects' onClick={props.handleInputValue}>
              Projects
            </a>
            <a className="navigation col text-white" href='contact' onClick={props.handleInputValue}>
              Contact
            </a>
        </div>

    );
}
export default NavigationBar;


