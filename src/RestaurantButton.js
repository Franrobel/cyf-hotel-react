import React from "react";

const RestaurantButton = props => {
  return (
    <button
      onClick={() => {
        return props.number();
      }}
      className="btn btn-primary"
    >
      {" "}
      Add
    </button>
  );
};

export default RestaurantButton;
