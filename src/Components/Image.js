import React from "react";
const Image = (props) => {
  return (
    <div>
      {
        <img style={{width:"250px",height:"250px"}}
          className="rounded  img-fluid img-thumbnail float-left "
          alt=""
          src={process.env.PUBLIC_URL + props.url}
        ></img>
      }
    </div>
  );
};
export default Image;
