import React from 'react';

const AboutMe = ()=>{
    return (
        <div style={{backgroundImage:`url(${"p2.jpg"})`,backgroundRepeat:"no-repeat",backgoundPosition:"center",backgroundSize:"cover", height: "70vh"}} className="card tp-5 font-weight-bold" id="body">
<h5 className="card-header text-uppercase text-white">About Me</h5>
        <div className="card-body"> 
            <p style={{fontSize:"20px"}}className= " text-white font-weight-bold text-white">Hello everyone!</p> 
            <p style={{fontSize:"20px"}} className=" font-weight-bold text-white">I am Preeti Gupta, mother of two devilish kids who inspired me to return to job again after a break of 10 years since my marriage.</p>  
            <p style={{fontSize:"20px"}} className=" font-weight-bold text-white">Let me give a try to give you an image about me through my self-description.
                As you already know, I am a mother of two kids amd there are many things about me like
                I like to cook variety of foods, like to read, think, dream.
                I love to listen music and I feel the music flowing through my viens. 
                I am fun loving, easy to go and fast learner.
            </p>  
            <p style={{fontSize:"20px"}} className=" font-weight-bold text-white">I always enjoy programming. Before my maariage, I was working in India as programmer. But after kids, I prefer job of mom over my career. 
                But now, as my kids are grown and always wants me to fulfil my dream of being an awesome web developer,  I want to enter again in this world of coding.  
                I am just someone who is right now learning coding in bootcamp to live my dream. 
                May be! I don't have much experience but while doing the full time mom job I learned to manage many things and experienced many aspects of life 
                which I can implement in this coding environment</p>             
        </div>
        </div>
    );
}
export default AboutMe;