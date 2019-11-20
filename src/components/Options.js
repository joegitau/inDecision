import React from "react";
import Option from "./Option";

const Options = props => (
  <div>
    {props.options.length === 0 ? (
      <div className="card-header">
        <h3 className="card-header__title--faded">Add Options</h3>
      </div>
    ) : (
      <div className="card-header">
        <h3 className="card-header__title">Your Options</h3>
        <button
          className="button button--plain"
          onClick={props.handleRemoveAll}
        >
          Remove All
        </button>
      </div>
    )}
    <div className="columns twelve">
      {props.options.map((option, index) => (
        <Option
          key={option}
          count={index + 1}
          optionText={option}
          handleRemoveOption={props.handleRemoveOption}
        />
      ))}
    </div>
  </div>
);

export default Options;
