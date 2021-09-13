import React from "react";

const TouristInfoCards = props => {
  return (
    <div className="cards-item">
      <div className="card glasglow">
        <h5>{props.name}</h5>
        <img src={props.imagen} alt="" />
        <p>{props.descripcion}</p>
        <div className="card-body">
          <a href={props.enlace} target="_blank" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};
export default TouristInfoCards;
