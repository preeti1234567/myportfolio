import React from "react";

const NameDescription = () => {
  return (
    <div className="row pt-5 pb-5 ">
      <div className="col-9 ">
        <p className="pl-5 text-left text-dark h1 font-italic">Preeti Gupta</p>
        <p className="pl-5 text-left h4 text-info font-italic">
          Aspring Web Develop
        </p>
      </div>
      <div className="col-3">
        <a
          className="text-white p-1"
          href="https://www.linkedin.com/in/preetigupta-59a5641ab/"
        >
          Linked
        </a>
        <a className="text-white p-1" href="https://github.com/preeti1234567">
          Github
        </a>
      </div>
    </div>
  );
};

export default NameDescription;
