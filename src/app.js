class App extends React.Component {
  constructor(props) {
    super(props);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleRemoveOption = this.handleRemoveOption.bind(this);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);

    this.state = {
      options: []
    };
  }

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

  handlePick() {
    const randPick = Math.floor(Math.random() * this.state.options.length);

    const option = this.state.options[randPick];
    alert(option);
  }

  handleAddOption(option) {
    if (!option) {
      return "Please enter a valid value";
    } else if (this.state.options.indexOf(option) > -1) {
      return "The option already exists";
    }

    this.setState(prevState => ({ options: prevState.options.concat(option) }));
  }

  handleRemoveOption(optionToRemove) {
    this.setState(prevState => ({
      options: prevState.options.filter(option => {
        return option !== optionToRemove;
      })
    }));
  }

  handleRemoveAll() {
    this.setState(() => ({ options: [] }));
  }

  render() {
    const subtitle = "Not sure what to do...";

    return (
      <div className="container">
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleRemoveAll={this.handleRemoveAll}
          handleRemoveOption={this.handleRemoveOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

const Header = props => {
  return (
    <div className="row">
      <div className="columns twelve header">
        <h4>{props.title}</h4>
        {props.subtitle && <h6>{props.subtitle}</h6>}
      </div>
    </div>
  );
};

Header.defaultProps = {
  title: "inDecision"
};

const Action = props => {
  return (
    <div className="row">
      <div className="columns twelve">
        <button
          onClick={props.handlePick}
          disabled={!props.hasOptions}
          className="button"
        >
          What should I do?
        </button>
      </div>
    </div>
  );
};

const Options = props => {
  return (
    <div className="row">
      {props.options.length === 0 ? (
        <div className="six columns">
          <p>Please add some options</p>
        </div>
      ) : (
        <div className="six columns">
          <p>Here are some options</p>
        </div>
      )}
      <div className="six columns">
        <button className="button" onClick={props.handleRemoveAll}>
          Remove All
        </button>
      </div>
      <div className="columns twelve">
        {props.options.map(option => (
          <Option
            key={option}
            optionText={option}
            handleRemoveOption={props.handleRemoveOption}
          />
        ))}
      </div>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.options.value.trim();

    const error = this.props.handleAddOption(option);
    this.setState(() => ({ error }));

    if (!error) e.target.elements.options.value = "";
  }

  render() {
    return (
      <div className="row">
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <div className="row">
            <input name="options" type="text" />
            <input
              class="button-primary"
              type="submit"
              value="Add Option"
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

const Option = props => {
  return (
    <div className="twelve columns">
      {props.optionText}
      <button
        className="button"
        onClick={e => props.handleRemoveOption(props.optionText)}
      >
        Remove
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
