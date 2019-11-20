import React, { Component } from "react";

export default class AddOption extends Component {
  state = {
    error: undefined
  };

  handleAddOption = e => {
    e.preventDefault();

    const option = e.target.elements.options.value.trim();

    const error = this.props.handleAddOption(option);
    this.setState(() => ({ error }));

    if (!error) e.target.elements.options.value = "";
  };

  render() {
    return (
      <div className="card card--plain">
        {this.state.error && (
          <p className="add-option-errors">{this.state.error}</p>
        )}
        <form onSubmit={this.handleAddOption} className="add-option">
          <input name="options" type="text" className="add-option__input" />
          <input className="button" type="submit" value="Add Option"></input>
        </form>
      </div>
    );
  }
}
