import React, { Component } from "react";
import AddOption from "./AddOption";
import Options from "./Options";
import Header from "./Header";
import Action from "./Action";

export default class App extends Component {
  state = {
    options: []
  };

  componentDidMount() {
    try {
      const obj = localStorage.getItem("options");
      const options = JSON.parse(obj);

      if (options) this.setState(() => ({ options }));
    } catch (err) {
      console.log(err);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options !== this.state.options) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  handlePick = () => {
    const randPick = Math.floor(Math.random() * this.state.options.length);

    const option = this.state.options[randPick];
    alert(option);
  };

  handleAddOption = option => {
    if (!option) {
      return "Please enter a valid value";
    } else if (this.state.options.indexOf(option) > -1) {
      return "The option already exists";
    }

    this.setState(prevState => ({ options: prevState.options.concat(option) }));
  };

  handleRemoveOption = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => {
        return option !== optionToRemove;
      })
    }));
  };

  handleRemoveAll = () => {
    this.setState(() => ({ options: [] }));
  };

  render() {
    const subtitle = "Not sure what to do...";

    return (
      <div className="">
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="card">
            <Options
              options={this.state.options}
              handleRemoveAll={this.handleRemoveAll}
              handleRemoveOption={this.handleRemoveOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
      </div>
    );
  }
}
