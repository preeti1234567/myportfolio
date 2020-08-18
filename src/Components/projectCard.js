import React from "react";
import Image from "./Image";

const ProjectCard = (props) => {
  let counter = 0;
  return (
    <div className="card">
      <div id={"heading" + props.project.id}>
        <button
          className="btn btn-secondary btn-lg btn-block text-left"
          type="button"
          data-toggle="collapse"
          data-target={"#collapse" + props.project.id}
          aria-expanded="true"
          aria-controls={"collapse" + props.project.id}
        >
          {props.project.title}
        </button>
      </div>
      <div
        id={"collapse" + props.project.id}
        className="collapse"
        aria-labelledby={"heading" + props.project.id}
        data-parent="#accordionExample"
      >
        <div className="card-body">
          <p>{props.project.description}</p>
          <div className="row">
            <p className="col-12">
              Links:
              <a href={props.project.deploy_link} className="text-primary">
                website
              </a>
              <a href={props.project.github_link} className="text-primary">
                github
              </a>
            </p>
          </div>
          <div className="row">
            {props.project.pictureurl.map((url) => (
              <Image key={url + counter++} url={url} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
