import React from "react";

const Resume = () => {
  return (
    <div>
      <embed
        style={{width:'100%',height:'100%'}}
        src={process.env.PUBLIC_URL + "pdf/PreetiGupta.pdf"}
        type="application/pdf"
      />
    </div>
  );
};
export default Resume;
