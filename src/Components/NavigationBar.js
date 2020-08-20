import React from 'react';

const NavigationBar = (props) =>{
    const options = [{title:'About Me',value:'aboutMe'},{title:'Resume',value:'resume'},{title:'Portfolio',value:'projects'},{title:'Contact',value:'contact'}];
    return(
      <div className="row">
        {options.map(option => <div key={option.value} className="col-3 btn btn-outline-secondary text-center text-white" data-div_id={option.value}  onClick={props.handleInputValue}>{option.title}</div>)}
      </div> 
        // <div className="row p-3">
           
        //     <a className="navigation col text-white" href='aboutMe'  onClick={props.handleInputValue} >
        //       About Me
        //     </a>
        //         <a className="navigation col text-white" href='resume' onClick={props.handleInputValue}>
        //         Resume
        //     </a>
        //     <a className="navigation col text-white" href='projects' onClick={props.handleInputValue}>
        //       Projects
        //     </a>
        //     <a className="navigation col text-white" href='contact' onClick={props.handleInputValue}>
        //       Contact
        //     </a>
        // </div>
        

    );
}
export default NavigationBar;


