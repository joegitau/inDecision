import React from "react";

const Action = props => {
  return (
    <div className="row">
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
        className="main-btn"
      >
        What should I do?
      </button>
    </div>
  );
};

export default Action;
