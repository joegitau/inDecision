import React from "react";

const Header = props => {
  return (
    <div className="header">
      <div className="container">
        <h1>{props.title}</h1>
        {props.subtitle && <h3>{props.subtitle}</h3>}
      </div>
    </div>
  );
};

Header.defaultProps = {
  title: "inDecision"
};

export default Header;
