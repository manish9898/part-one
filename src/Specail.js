import React from "react";
import "./index.css";

function Specail(props) {
  return (
    <>
      <div className="col-lg-4">
        <div className="card">
          <img src={props.imgsrc} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.headtitle}</h5>
            <p className="card-text">
              {props.paragraph}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Specail;
