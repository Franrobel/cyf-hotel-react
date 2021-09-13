import React from "react";

const Footer = props => {
  const { info } = props;
  return (
    <div className="lista-container">
      <ul>
        {info.map((each, i) => (
          <li key={i}>{each}</li>
        ))}
      </ul>
    </div>
  );
};
export default Footer;
