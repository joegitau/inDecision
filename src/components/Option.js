import React from "react";

const Option = props => (
  <div className="option">
    <p>
      {props.count}. {props.optionText}
    </p>
    <button
      className="button button--plain"
      onClick={e => props.handleRemoveOption(props.optionText)}
    >
      Remove
    </button>
  </div>
);

export default Option;
