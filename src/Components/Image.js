import React from "react";
const Image = (props) => {
  return (
    <div>
      {
        <img
          className="rounded  img-fluid img-thumbnail"
          alt=""
          src={process.env.PUBLIC_URL + props.url}
        ></img>
      }
    </div>
  );
};
export default Image;
